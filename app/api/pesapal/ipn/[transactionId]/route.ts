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
    console.error("❌ Failed to get access token for IPN:", error.response?.data || error.message);
    throw new Error("Failed to authenticate with payment provider");
  }
};

const getTransactionStatus = async (orderTrackingId: string, accessToken: string) => {
  try {
    const response = await axios.get(
      `${PESAPAL_STATUS_URL}?orderTrackingId=${orderTrackingId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    
    return response.data;
  } catch (error: any) {
    console.error("❌ Failed to get transaction status:", error.response?.data || error.message);
    throw new Error("Failed to verify payment status");
  }
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ transactionId: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const orderTrackingId = searchParams.get('OrderTrackingId');
    const orderMerchantReference = searchParams.get('OrderMerchantReference');
    const resolvedParams = await params;

    console.log("📧 IPN Notification received:", {
      transactionId: resolvedParams.transactionId,
      orderTrackingId,
      orderMerchantReference
    });

    if (!orderTrackingId) {
      return NextResponse.json({ error: 'Missing OrderTrackingId' }, { status: 400 });
    }

    // Get access token
    const accessToken = await getAccessToken();
    
    // Get transaction status from Pesapal
    const statusResponse = await getTransactionStatus(orderTrackingId, accessToken);
    
    console.log("✅ Transaction Status:", statusResponse);

    // Here you would typically save the transaction status to your database
    // For now, we'll just log it and return a success response
    
    const paymentStatus = statusResponse.payment_status_description || statusResponse.status_description;
    
    if (paymentStatus === 'Completed' || paymentStatus === 'COMPLETED') {
      console.log("✅ Payment completed successfully for transaction:", resolvedParams.transactionId);
      
      // TODO: Save successful payment to database
      // TODO: Send confirmation email to donor
      // TODO: Update donation records
      
    } else if (paymentStatus === 'Failed' || paymentStatus === 'FAILED') {
      console.log("❌ Payment failed for transaction:", resolvedParams.transactionId);
      
      // TODO: Handle failed payment
      
    } else {
      console.log("⏳ Payment pending for transaction:", resolvedParams.transactionId);
      
      // TODO: Handle pending payment
    }

    // Pesapal expects a 200 response to acknowledge receipt of the IPN
    return NextResponse.json({ 
      message: 'IPN received successfully',
      status: paymentStatus 
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ IPN processing error:", error);
    
    // Even on error, return 200 to prevent Pesapal from retrying
    return NextResponse.json({ 
      message: 'IPN processing failed',
      error: error.message 
    }, { status: 200 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ transactionId: string }> }
) {
  // Handle POST requests the same way as GET for IPN
  return GET(request, { params });
}