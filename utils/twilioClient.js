

import getConfig from 'next/config'
const { publicRuntimeConfig: config } = getConfig()
 
const client = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

export function sendSMS(toPhone, msg) {
    client.messages
        .create({ from: config.twilio.phoneNumber, body: msg, to: toPhone })
        .then(message => console.log(message.sid));
}
