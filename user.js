
import cache from './src/core/cache';

class User {
    constructor() {
        this.userData = cache.get('user');
    }

    /**
     * 
     * Check if user is logged in
     * 
     * @returns {boolean}
     */
    isLoggedIn() {
        return this.userData !== null;
    }

    /**
     * Log the user in 
     * It will store the data in the storage engine i.e Local Storage
     * But will not make the ajax request
     * 
     * @param  {object} userData 
     * @returns {void}
     */
    login(userData) {
       
        this.userData = userData;
          
            console.log("set user" ,cache.get('user'));
            setTimeout(() => { cache.set('user', userData)
        }, 0);
            console.log("set user2" ,cache.get('user'));
    }

    /**
     * Log the user out
     */
    logout() {
        this.userData = null;
      
        setTimeout(() => {
          
           cache.remove('user');
           console.log("get user" ,cache.get('user'));
        }, 0);
    }

    /**
     * Get user access token
     * 
     * @returns {string}
     */
    getAccessToken() {
        return this.userData.token ? this.userData.token:null;
    }
}

export default new User();