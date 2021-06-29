const http = require('./Http')
const BASE_URL = 'http://localhost:3000/api/contacts'

    class ContactService {
    constructor() {}

    async fetchContactList(searchText){
        try{
            let url = searchText && searchText.length > 0 ? BASE_URL + `?filter=${searchText}` : BASE_URL
            let response = await http.get(url);
            if(response.data.status === 1){
                return response.data.data
            }else{
                return []
            }
        }catch (e) {
            return []
        }
    }

    async removeContact(contactId){
        try{
            let url = BASE_URL + `/${contactId}`
            let response = await http.delete(url);
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