import http from '../endpoint';

class Cheques {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Cheques';

    /**
     * Fetch all Currencies from endpoint api
     */
    GetCurrentUserAvailableChequesCount = async () => {
        try {
            const { data } = await http.get(this.route + '/GetCurrentUserAvailableChequesCount')
            return data.data;
        } catch (err) {
            return "error";
        }
    }
    GetReceivedChequesByCurrentUser= async() => {
        try {
            const { data } = await http.get(this.route + '/GetReceivedChequesByCurrentUser')
            return data.data.items;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    GetSentChequesByCurrentUser= async() => {
        try {
            const { data } = await http.get(this.route + '/GetSentChequesByCurrentUser')
            return data.data.items;
        } catch (err) {
            return err.response.data.errors;
        }
    }

}
export default new Cheques();