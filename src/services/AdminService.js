import axios from 'axios'; 
const Admin_API_BASE_URL = "http://localhost:8989/userservice/api/authenticate"; 

class AdminService {

    getAdminLogin(userName,password){ 
        console.log(userName + password);
        return axios.post(Admin_API_BASE_URL + '/login?username='+userName+'&password='+password );
    } 
 


    
 }
export default new AdminService();