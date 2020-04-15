import crypto from "crypto"


const algor = 'aes-256-ctr';
const key = 'wfeS10opSp19n011g1Ab10'


const encrypt = data => {
    let e = crypto.createCipher(algor,key);
    e = e.update(data,'utf8','hex')
    return e.toString();

}


const decrypt = data => {
    let e = crypto.createDecipher(algor,key);
    e = e.update(data,'hex','utf8')
    return e.toString();
}


export default {  
    encrypt , 
    decrypt 
}