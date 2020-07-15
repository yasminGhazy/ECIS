import http from '../endpoint';

class Beneficiaries {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Beneficiaries';

    /**
     * Fetch all Currencies from endpoint api
     */
    GetUserBeneficiaryRequests = async () => {
        try {
            const { data } = await http.get(this.route + '/GetUserBeneficiaryRequests')
            console.log(data)

            return data.data.items;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    GetByCurrentUser =async () =>{
        try {
            const { data } = await http.get(this.route + '/GetByCurrentUser')
            return data.data.items;
        } catch (err) {
            return err.response.data.errors;
        }
    }
    
    AddBeneficiary = async(params) => {
        try {
            const  data  = await http.post(this.route + `/AddBeneficiary?email=${params}` )
            return data;
        } catch (err) {
            return err.response.data.errors;
        }
    }

    RespondToBeneficiaryRequest= async(params) => {
        try {
            const  data  = await http.put(this.route + `/RespondToBeneficiaryRequest`,params )
            return data;
        } catch (err) {
            return err.response.data.errors[0];
        }
    }
  
}

export default new Beneficiaries();