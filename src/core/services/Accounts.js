import http from '../endpoint';

class Accounts {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Accounts';

    /**
     * Fetch all Currencies from endpoint api
     */
    getCurrencies = async () => {
        try {
            const { data } = await http.get(this.route + '/GetCurrencies')
            return data.data;
        } catch (err) {
            return "error";
        }
    }
    /**
     * Fetch all Types from endpoint api
     */
    getAccountTypes = async () => {
        try {
            const { data } = await http.get(this.route + '/GetAccountTypes')
            return data.data.items;
        } catch (err) {
            return err;
        }
    }
    /**
     * Fetch current user accounts with specific status from endpoint api
     */
    GetByCurrentUser = async (status = -1) => {
        if (status >= 0) {
            try {
                const { data } = await http.get(this.route + `/GetByCurrentUser?status=${status}`)
                return data.data.items;
            } catch (err) {
                return err;
            }
        }
        else {
            try {
                const { data } = await http.get(this.route + `/GetByCurrentUser`)
                return data.data.items;
            } catch (err) {
                return err;
            }
        }
    }
}





export default new Accounts();