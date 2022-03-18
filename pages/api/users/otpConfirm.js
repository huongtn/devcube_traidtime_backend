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
    let user = await dbContext.User.findOne({ code: req.body.code });
    if (user) {
        let token = jwt.sign(
            {
                user: user,
            }, config.jwt_secret
        );
        user.authLoginToken = token;
        user.code = '';
        await user.save({ validateBeforeSave: false });
        res.json({ token });
    }
    else {
        res.status(400).json({
            message: "Otp incorrect"
        });
    }
};
export default handler;
