import dbConnect from '../../../utils/dbConnect';
import dbContext from '../../../models/dbContext'; 
import getConfig from 'next/config';
import jwt_decode  from 'jwt-decode';
const { publicRuntimeConfig: config } = getConfig()
import jwt from 'jsonwebtoken'
import { isValidObjectId } from 'mongoose';
dbConnect();

const handler = async (req, res) => {
    // {token : ""}
    const { method } = req;

    if (method !== 'POST') {
      return res
        .status(400)
        .json({ success: false, message: 'Only POST requests are allowed.' });
    }

    try{
        const {token} =  req.body
        console.log("token=>" + token);
        var decoded = jwt_decode(token);

        console.log(decoded);
        const {email , iss , aud , exp} = decoded;
        console.log("email=>"+email);

        const currentTimeInSeconds=Math.floor(Date.now()/1000);
        console.log("unitTimeSeconds=>" + currentTimeInSeconds);
       
        let user = await dbContext.User.findOne({ email: email } , "_id email role ");

        console.log(user);
          
        if (!user) {
            // create new user
            var newUser = await dbContext.User.create({
              email: email,
            });

            user = newUser;
          }

          
          user.token = await GenerateToken(user).then((token)=> {return token})
          return res.status(200).json({
              "role" : user.role,
              "email" : user.email,
              "token" : user.token
          });
   

    }catch(err){
        res.status(400).json({"Status" : 400 , "Message" : err})
    }
}
async function GenerateToken(user){
    var payload = { email : user.email , role : user.role}
    var token = jwt.sign(
        payload ,
        config.jwt_secret,
        {
            expiresIn: "2h",
        }
    );
    return token
   
  }
  

export default handler;