import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const PESAPAL_AUTH_URL = "https://pay.pesapal.com/v3/api/Auth/RequestToken";
const PESAPAL_STATUS_URL = "https://pay.pesapal.com/v3/api/Transactions/GetTransactionStatus";

const getAccessToken = async () => {
  try {
    const response = await axios.post(PESAPAL_AUTH_URL, {
      consumer_key: process.env.PESAPAL_CONSUMER_KEY,
      consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
    });

    if(response.data.status == 200){
      return response.data.token;
    } else {
      throw new Error("Failed to authenticate with Pesapal");
    }
  } catch (error: any) {
    console.error("❌ Failed to get access token:", error.response?.data || error.message);
    throw new Error("Failed to authenticate with payment provider");
  }
};

export async function POST(request: NextRequest) {
  try {
    const { orderTrackingId } = await request.json();

    if (!orderTrackingId) {
      return NextResponse.json({ error: 'OrderTrackingId is required' }, { status: 400 });
    }

    // Get access token
    const accessToken = await getAccessToken();
    
    // Get transaction status from Pesapal
    const response = await axios.get(
      `${PESAPAL_STATUS_URL}?orderTrackingId=${orderTrackingId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Transaction Status Check:", response.data);

    return NextResponse.json({
      status: response.data.payment_status_description || response.data.status_description,
      amount: response.data.amount,
      currency: response.data.currency,
      description: response.data.description,
      created_date: response.data.created_date,
      confirmation_code: response.data.confirmation_code
    });

  } catch (error: any) {
    console.error("❌ Status check error:", error);
    return NextResponse.json({ 
      error: 'Failed to check payment status', 
      details: error.message 
    }, { status: 500 });
  }
}