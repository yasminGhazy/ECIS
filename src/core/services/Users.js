import http from '../endpoint';

class Users {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Users';

    /**
     * Fetch all Currencies from endpoint api
     */
    GetCurrentUserInfo = async () => {
        try {
            const { data } = await http.get(this.route + '/GetCurrentUserInfo')
            return data.data;
        } catch (err) {
            return "error";
        }
    }

    Register =async (params) => {
        try {
            const  data  = await http.post(this.route + '/Register' , params)
            return ("here",data.status);
        } catch (err) {
            return err.response.data.errors;
        }
    }

}
export default new Users();