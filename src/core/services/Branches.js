import http from '../endpoint';

class Branches {
    /**
     * Set the main module route
     * 
     * @var  {string}
     */
    route = '/Branches';

    /**
     * Fetch all branches from endpoint api
     */
    getAll = async () => {
        try {
            const {data} = await http.get(this.route + '/GetAll')
            return data.data.items;
        } catch (err) {
            return "error";
        }
    }
}

export default new Branches();