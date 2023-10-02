import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


export const requiredAuth = async (req, res, next)=>{

    let { token } = req.cookies;

    if(!token) return res.status(401).json({message:"No token, Authorization Denied"});

    console.log(token);

    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
       if(err) res.status(403).json({message:" Invalid Token "});
       req.user = user
       next();
    });
    
}
