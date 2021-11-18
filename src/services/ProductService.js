import axios from 'axios';
const config = {
    headers:{
      Authorization:'Bearer '+localStorage.getItem('token')
    }
  }
  console.log('TESST', config.headers.Authorization)
const PRODUCT_API_BASE_URLL = "http://localhost:9191/productservice/api";
 
class ProductService {
 
  
        addproduct(product){
            return axios.post(PRODUCT_API_BASE_URLL+'/addproduct',product,config);
        }
        // getproduct(){
        //     return axios.get(PRODUCT_API_BASE_URLL +'/list' );
        // }
        viewAllProduct(product){
            return axios.get(PRODUCT_API_BASE_URLL+'/viewallproduct/'+product,config);
        }
        deleteProduct(productIdentifier){
            return axios.delete(PRODUCT_API_BASE_URLL+'/delete/'+productIdentifier,config);
        }
        updateProduct(product){
            return axios.put(PRODUCT_API_BASE_URLL+'/update/'+product)
        }
       viewProductByProductName(productName){
            return axios.get(PRODUCT_API_BASE_URLL+'/viewbyname/'+ productName);
        }
        

        getMedByID(medID){
            return axios.get(PRODUCT_API_BASE_URLL+'/getMed/'+medID);
        }
        getAllMed(){
            return axios.get(PRODUCT_API_BASE_URLL+'/getMed');
        }
    }
    export default new ProductService();
 
