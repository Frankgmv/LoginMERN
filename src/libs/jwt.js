import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export function createTokenAccess(payLoad){
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payLoad,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token)=>{
                if(err) reject('hay un error')
                resolve(token)
            }
        )
    })
}
