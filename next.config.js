module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.example.com/:path*',
      },
    ]
  },
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    database: process.env.DATABASE,
    jwt_secret: process.env.JWT_SECRET,
    twilio:
    {
      accountSid: process.env.TWILIO_ACCOUNTSID,
      authToken: process.env.TWILIO_AUTHTOKEN,
      phoneNumber: process.env.TWILIO_PHONENUMBER,
    },
    mqtt:
    {
      Con:process.env.Mqtt_Con,
      UserName:process.env.Mqtt_UserName,
      Password:process.env.Mqtt_Password,
      Port:process.env.Mqtt_Port
    }
  }
}
