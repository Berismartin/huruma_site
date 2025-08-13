import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const PESAPAL_AUTH_URL = "https://pay.pesapal.com/v3/api/Auth/RequestToken";
const PESAPAL_ORDER_URL = "https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest";
const PESAPAL_STATUS_URL = "https://pay.pesapal.com/v3/api/Transactions/GetTransactionStatus";
const PESAPAL_IPN_REGISTER_URL = "https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN";
const PESAPAL_TRANSACTIONS_URL = "https://pay.pesapal.com/pesapalv3/api/Transactions/GetTransactions";

const getAccessToken = async () => {
  try {
    const response = await axios.post(PESAPAL_AUTH_URL, {
      consumer_key: process.env.PESAPAL_CONSUMER_KEY,
      consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
    });

    if(response.data.status == 200){
      let accessToken = response.data.token;
      return accessToken;
    }else{
      throw new Error("Failed to Make payment! Contact Support");
    }
    
  } catch (error: any) {
    console.error("❌ Failed to get access token:", error.response?.data || error.message);
    throw new Error("Failed to authenticate with payment provider");
  }
};

const registerUniqueIPN = async (transactionId: string, pesa_token: string) => {
  try {
    const ipnUrl = `${process.env.NEXTAUTH_URL}/api/pesapal/ipn/${transactionId}`;

    const response = await axios.post(
      PESAPAL_IPN_REGISTER_URL,
      {
        url: ipnUrl,
        ipn_notification_type: "GET",
      },
      {
        headers: {
          Authorization: `Bearer ${pesa_token}`,
          "Content-Type": "application/json",
        },
      }
    );
    
    console.log("✅ IPN Registration Response:", response.data);
    return response.data.ipn_id;
  } catch (error: any) {
    console.error("❌ IPN Registration Error:", error.response?.data || error.message);
    return null;
  }
};

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { amount, email, phone, name, program } = requestBody;

    if (!amount || !email || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get Pesapal access token
    const pesa_accesstoken = await getAccessToken();
    if (!pesa_accesstoken) {
      return NextResponse.json({ error: 'Failed to authenticate with payment provider' }, { status: 500 });
    }

    // Generate unique transaction ID
    const transactionId = `HGSI-DON-${Date.now()}`;

    // Register IPN
    const ipnId = await registerUniqueIPN(transactionId, pesa_accesstoken);
    if (!ipnId) {
      return NextResponse.json({ error: 'Failed to register payment notification' }, { status: 500 });
    }

    // Prepare payment payload
    const payload = {
      id: transactionId,
      currency: "UGX",
      amount: amount,
      description: `Donation to Huruma Global Support Initiative - ${program}`,
      callback_url: `${process.env.NEXTAUTH_URL}/donation-success`,
      notification_id: ipnId,
      billing_address: {
        email_address: email,
        phone_number: phone || '',
        city: "Kampala",
        first_name: name.split(' ')[0],
        last_name: name.split(' ').slice(1).join(' ') || '',
        country_code: "UG",
      },
    };

    // Submit order to Pesapal
    const response = await axios.post(PESAPAL_ORDER_URL, payload, {
      headers: {
        Authorization: `Bearer ${pesa_accesstoken}`,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ Pesapal Order Response:", response.data);

    if (response.data.status === '200') {
      return NextResponse.json({ 
        checkoutUrl: response.data.redirect_url,
        transactionId: transactionId 
      });
    } else {
      throw new Error("Payment initiation failed");
    }
  } catch (error: any) {
    console.error("❌ Payment error:", error);
    return NextResponse.json({ 
      error: 'Payment processing failed', 
      details: error.message 
    }, { status: 500 });
  }
}