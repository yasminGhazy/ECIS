import http from '../core/endpoint';

class RestfulEndpoint {
    /**
     * Set the main module route
     * i.e /users
     * 
     * @var  {string}
     */
    route = '';

    /**
     * Fetch records from endpoint api
     * 
     * @param   {object} params 
     * @returns {Promise}
     */
    list(route) {        
        return http.get(route);
    }

    /**
     * Fetch one record from endpoint api
     * 
     * @param   {number} id 
     * @param   {object} params 
     * @returns {Promise}
     */
    get(route) {
        return http.get(route );
    }

    /**
     * Create new record
     * 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    post(data) {
        return http.post(this.route, {
            data
        });
    }

    /**
     * Update existing record
     * 
     * @param   {number} id 
     * @param   {object|FormData} data 
     * @returns {Promise}
     */
    put(id, data) {
        return http.put(this.route + '/' + id, {
            data
        });
    }

    /**
     * Delete existing record
     * 
     * @param   {number} id 
     * @returns {Promise}
     */
    delete(id) {
        return http.delete(this.route + '/' + id);
    }
}
export default new RestfulEndpoint();