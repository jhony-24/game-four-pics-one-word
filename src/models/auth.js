import crypt from "src/resources/tools/cryptography"
import Cookies from "js-cookie"

class Auth {
    static KEY_USER = "USER_IO";

    /***
     * Get cookies from auth 
     * @type object
     * @returns object information about user
     */
    static get() {
        let cookie = Cookies.get(Auth.KEY_USER);
        if (cookie !== undefined && cookie !== "") {
            let data = cookie.split('');
            let newData = "";
            for (var i = 0; i < data.length; i++) {
                if (i % 2 === 0) {
                    newData += data[i].toLowerCase();
                }
            }
            newData = crypt.decrypt(newData);
            return JSON.parse(newData);
        }
        else {
            return null;
        }
    }

    /**
     * Create a cookie user
     * @param {*} data set object to save in cookie
     */
    static set(data = "") {
        if (data !== "") {
            data = JSON.stringify(data);
            let username = Auth.KEY_USER;
            let newData = crypt.encrypt(data).split('').map(e => {
                return e.toUpperCase() + "A";
            }).join('');
            Cookies.set(username, newData)
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