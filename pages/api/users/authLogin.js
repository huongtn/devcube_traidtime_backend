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
  console.log("email=>" + req.body.email);
  // Get user based on POSTed email
  let user = await dbContext.User.findOne({ email: req.body.email });

  if (!user) {
    user = await dbContext.User.create({
      email: req.body.email,
    });
  }
  let token = jwt.sign(
    {
      user:user,
    },config.jwt_secret
  );
  user.authLoginToken = token;
  await user.save({ validateBeforeSave: false });
  //sendSMS(req.body.phoneNumber,"Create account");
  // Generate the random auth token
  res.json({
    token
  }); 
};

export default handler;
