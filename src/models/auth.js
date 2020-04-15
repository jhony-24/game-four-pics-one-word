import crypt from "src/tools/cryptography"
import Cookies from "js-cookie"


class Auth {

    static keyUser = "USER_IO";

    /***
     * Get cookies from auth 
     * @type object
     * @returns object information about user
     */
    static get() {
        let cookie = Cookies.get(this.keyUser);
        if ( cookie !== undefined && cookie !== "" ) {
            let data = cookie.split('');
            let newData = "";
            for (var i = 0 ; i < data.length ;i ++ ) {
                if ( i % 2 === 0 ) {
                    newData += data[i].toLowerCase();
                }
            }
            newData = crypt.decrypt(newData);
            if ( typeof newData === "object" ) {
                newData = JSON.parse(newData);
            }
            return newData;
        }
        else {
            return null;
        }
    }


    /**
     * Create a cookie user
     * @param {*} data set object to save in cookie
     */
    static set( data = "" ) {
        if( data !== "" ) {
            if ( typeof data === "object" ) {
                data = JSON.stringify(data);
            }
            let username = Auth.keyUser;
            let newData = crypt.encrypt(data).split('').map(e=>{
                return e.toUpperCase() + "A";
            }).join('');
            Cookies.set(username,newData)
        }
    }


    /**
     * Delete all cookies saved 
     */
    static destroy() {
        Cookies.destroy();
    }


}


export default Auth;