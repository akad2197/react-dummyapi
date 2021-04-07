import { ApiService } from "./Base";
import EndPoints from '../Config/EndPoints'
 

class DataService {
    getUserList = async () => {
        return new Promise(async (resolve, reject) => {
          try {
            const url =  EndPoints.getUserList;
            const response = await ApiService("get", url); 
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        });
      };

      getUserFullProfile = async (userID)=>{
        return new Promise(async (resolve, reject) => {
          try {
            const url =  EndPoints.getUserByID.replace("{userId}",userID);
            const response = await ApiService("get", url); 
            resolve(response);
          } catch (error) {
            reject(error);
          }
        });
      }

      getPostList = async()=>{
        return new Promise(async (resolve, reject) => {
          try {
            const url =  EndPoints.getPostList;
            const response = await ApiService("get", url); 
            resolve(response.data);
          } catch (error) {
            reject(error);
          }
        });

      }
}
export default  new DataService();

