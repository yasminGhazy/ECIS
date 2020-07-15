
import http from '../endpoint';

class Transactions {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Transactions';

    /**
     * Fetch all branches from endpoint api
     */
    GetByCurrentUser = async () => {
        try {
            const {data} = await http.get(this.route + '/GetByCurrentUser')
            return data.data.items;
        } catch (err) {
            return "error";
        }
    }
}

export default new Transactions();