import axios from 'axios';
const config = {
    headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }
  }
  console.log('TESST', config.headers.Authorization)
const USER_API_BASE_URL = "http://localhost:9190/userservice/api";

class UserService {

   
    findAll(){
        return axios.get(USER_API_BASE_URL); 
    }
//    save(user){
//         return axios.post(User_API_BASE_URL, user);
//     }
findByUserName(userName){
    return axios.get(USER_API_BASE_URL+'/viewbyname/'+userName);
}

registerUser(user){
    return axios.post(USER_API_BASE_URL+'/save',user,config);
}
generateToken(userName,password){ 
    console.log(userName + password);
    return axios.post(USER_API_BASE_URL + '/authenticate');
} 
    viewUserByName(userName,user){
        return axios.get(USER_API_BASE_URL +'/viewbyname' +userName,user,config);
    }

    updateUser(userName,user){
        return axios.patch(USER_API_BASE_URL + '/update',userName,user,config);
    }

  deleteUser(userName){
        return axios.delete(USER_API_BASE_URL+'/delete/'+userName,config);
    }
}


export default new UserService();