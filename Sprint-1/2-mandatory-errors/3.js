const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Answer: .slice method is for strings as array and it's not for numbers, so when we execute this code we get an error.
// For fixing the problem we should convert the cardNumber variable to string the use the .slice method for it.
