# Pesapal Payment Integration API

This folder contains the API routes for Pesapal payment integration for the Huruma Global Support Initiative donation system.

## Setup

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Pesapal Configuration
PESAPAL_CONSUMER_KEY=your_pesapal_consumer_key_here
PESAPAL_CONSUMER_SECRET=your_pesapal_consumer_secret_here

# App Configuration
NEXTAUTH_URL=http://localhost:3000
CALLBACK_URL=http://localhost:3000

# For production, use:
# NEXTAUTH_URL=https://yourdomain.com
# CALLBACK_URL=https://yourdomain.com
```

### 2. Pesapal Account Setup

1. Register at [Pesapal Developer Portal](https://developer.pesapal.com/)
2. Create an app and get your Consumer Key and Consumer Secret
3. Configure your IPN (Instant Payment Notification) URL
4. Test with sandbox environment first

## API Routes

### `/api/pesapal/donate` (POST)
Initiates a donation payment with Pesapal.

**Request Body:**
```json
{
  "amount": 100000,
  "email": "donor@example.com",
  "phone": "+256700000000",
  "name": "John Doe",
  "program": "General Fund"
}
```

**Response:**
```json
{
  "checkoutUrl": "https://pay.pesapal.com/...",
  "transactionId": "HGSI-DON-1234567890"
}
```

### `/api/pesapal/ipn/[transactionId]` (GET/POST)
Handles Instant Payment Notifications from Pesapal.

This endpoint is called by Pesapal to notify about payment status changes.

### `/api/pesapal/status` (POST)
Checks the status of a payment transaction.

**Request Body:**
```json
{
  "orderTrackingId": "pesapal_tracking_id"
}
```

**Response:**
```json
{
  "status": "Completed",
  "amount": 100000,
  "currency": "UGX",
  "description": "Donation to Huruma Global Support Initiative",
  "created_date": "2024-01-15T10:30:00Z",
  "confirmation_code": "ABC123"
}
```

## Payment Flow

1. User fills donation form
2. Frontend calls `/api/pesapal/donate`
3. API creates payment request with Pesapal
4. User is redirected to Pesapal checkout
5. After payment, user returns to success page
6. Pesapal sends IPN to `/api/pesapal/ipn/[transactionId]`
7. API processes the notification and updates records

## Security Notes

- Never expose your Consumer Secret in client-side code
- Always validate payment status via IPN
- Use HTTPS in production
- Implement proper error handling and logging
- Consider implementing payment webhook retries

## Testing

Use Pesapal's sandbox environment for testing:
- Sandbox URL: `https://cybqa.pesapal.com`
- Use test credentials provided by Pesapal
- Test with various payment scenarios (success, failure, pending)

## Production Checklist

- [ ] Update to production Pesapal URLs
- [ ] Configure production environment variables
- [ ] Set up proper error monitoring
- [ ] Implement payment reconciliation
- [ ] Add email notifications for donations
- [ ] Set up database logging for transactions
- [ ] Configure backup IPN endpoints