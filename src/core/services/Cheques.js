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
    SendNewCheque =async (params) => {
        try {
            const  {data}  = await http.put(this.route + '/SendNewCheque',params)
            return data;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    GetChequeToSend= async(id) => {
        try {
            const { data } = await http.get(this.route + `/GetChequeToSend/${id}`)
            return data.data;
        } catch (err) {
            return err.response.data.errors;
        }
    }
}
export default new Cheques();