import axios from 'axios'; 

const CLIENT_API_BASE_URL = "http://localhost:9190/userservice/api"; 

class ClientService {

    // getCustByID(custID){
    //     return axios.get(CLIENT_API_BASE_URL+'/cust/'+custID);
    // }
    // getAllCust(){
    //     return axios.get(CLIENT_API_BASE_URL+'/cust/All');
    // }
    getClientLogin(username,password){ 
        console.log(username + password);
        return axios.post(CLIENT_API_BASE_URL + '/Userlogin?username='+username+'&password='+password );
    } 
    
registerUser(user){
    return axios.post(CLIENT_API_BASE_URL+'/save',user);
}
// viewAll(){
//     return axios.get(CLIENT_API_BASE_URL+'/viewAllclients'); 
// }

// updateClient(client_Id,client){
//     return axios.put(CLIENT_API_BASE_URL + '/updateClient/'+client_Id,client)
// }

    
 }
export default new ClientService();