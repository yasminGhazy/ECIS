import http from '../endpoint';

class Requests {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Requests';

    /**
     * Fetch all Currencies from endpoint api
     */
    GetCurrentUserInfo = async () => {
        try {
            const { data } = await http.get(this.route + '/GetByCurrentUser')
            return data.data.items;
        } catch (err) {
            return "error";
        }
    }

}
export default new Requests();