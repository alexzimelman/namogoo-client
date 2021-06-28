const http = require('./Http')
const BASE_URL = 'http://localhost:3000/api/contacts'

    class ContactService {
    constructor() {}

    async fetchContactList(){
        try{
            let response = await http.get(BASE_URL);
            if(response.data.status === 1){
                return response.data.data
            }else{
                return []
            }
        }catch (e) {
            return []
        }
    }
}

module.exports = new ContactService()