// genel API-Axios Alt yapısı 
import Axios from 'axios';
/**
 * Tüm Api istekleri ApiService fonksiyonu üzerinden yapılmaktadır.
 * @param method ile POST/GET/PUT/DELETE
 * @param url Http/Https url adress
 * @param requestParams  Gönderilecek datalar
 * @param token kullanıcı token değeri
 *
 *
 */

export const ApiService = async (method, endpoint, requestParams) => {
    const baseApiUrl='https://dummyapi.io/data/api';
    return new Promise(async (resolve, reject) => {
        try {


            // Axios.defaults.timeout = 5000;
            const headers = {
                'app-id':'606cba3112f1e44feb280a4b'
            };

            const requestConfig = {
                method: method || 'get',
                url:baseApiUrl+endpoint,
                data: requestParams,
                headers: headers
            };
            const result = await Axios(requestConfig);
            resolve(result.data);
        } catch (err) {           
        }
    });
};
