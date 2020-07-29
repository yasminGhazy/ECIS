import http from '../endpoint';

class Users {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Notifications';

    /**
     * Fetch all Currencies from endpoint api
     */
    GetByCurrentUser = async () => {
        try {
            const { data } = await http.get(this.route + '/GetByCurrentUser')
            return data.data.items;
        } catch (err) {
            return "error";
        }
    }

    GetUserNewNotificationsCount = async () => {
        try {
            const { data } = await http.get(this.route + '/GetUserNewNotificationsCount')
            return data.data;
        } catch (err) {
            return "error";
        }
    }
    // GetUserNotifications = async () => {
    //     try {
    //         const { data } = await http.get(this.route + '/GetUserNotifications')
    //         return data;
    //     } catch (err) {
    //         return err;
    //     }
    // }
    UpdateUserNewNotificationsStatus =async (params) => {
        try {
            const  data  = await http.put(this.route + '/UpdateUserNewNotificationsStatus',params)
            return data;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    Update =async (params) => {
        try {
            const  data  = await http.put(this.route + '/Update',params)
            return data;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    UpdateNotification =async (params) => {
        try {
            const  data  = await http.put(this.route + '/UpdateNotification',params)
            return data;
        } catch (err) {
            return err.response.data.errors;
        }
    }

}
export default new Users();