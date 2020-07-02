import { AsyncStorage } from 'react-native';
 let data =''; // return data from async get
export default {
  
    /**
     * Set data into storage engine
     * @param {string} key 
     * @param {value} value 
     */
    set(key, value) {
        AsyncStorage.setItem(
            key,
            JSON.stringify(value)
        );
       
    },

    /**
     * Get vale from storage engine
     * 
     * @param   {string} key 
     * @returns {any}
     */
    
    async getData(key) {
        let value = await AsyncStorage.getItem(key);
        data =value ? JSON.parse(value) : null;
    },
    
    get(key){
        this.getData(key) ;
        return data? data : null;
    },
    /**
     * Remove key from storage
     * 
     * @param  {string} key  
     */
     remove(key) {
    
      AsyncStorage.removeItem(key);
           
      console.log("removed");
    },
   

};