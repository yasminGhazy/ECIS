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
 



}
export default new Cheques();