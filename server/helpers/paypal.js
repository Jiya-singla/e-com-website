const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'live', // This should be 'sandbox' or 'live'
  'client_id': 'your-client-id',
  'client_secret': 'your-client-secret'
});
