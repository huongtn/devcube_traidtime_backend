import dbConnect from '../../../utils/dbConnect';
import dbContext from '../../../models/dbContext';
import getConfig from 'next/config'
const { publicRuntimeConfig: config } = getConfig()

import jwt from 'jsonwebtoken'
import { sendSMS } from '../../../utils/twilioClient';
dbConnect();

const handler = async (req, res) => {
    const { method } = req;

    if (method !== 'POST') {
        return res
            .status(400)
            .json({ success: false, message: 'Only POST requests are allowed.' });
    }
    // Get user based on POSTed phoneNumber
    let user = await dbContext.User.findOne({ phoneNumber: req.body.phoneNumber });

    const code = Math.floor(100000 + Math.random() * 900000);
    sendSMS(req.body.phoneNumber, code);
    if (!user) {
        user = await dbContext.User.create({
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            code: code
        });
    }
    user.code = code;
    await user.save({ validateBeforeSave: false });

    // Generate the random auth token
    res.json({
        message: "please check your otp"
    });
};
export default handler;
