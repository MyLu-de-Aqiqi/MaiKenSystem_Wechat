
import {cwUrl} from './env.js'
const baseUrl = cwUrl

// const baseUrl = "https://www.mimkenc.cn:8764"


const myRequest = (url = '', date = {}, type = 'GET', header = {
}) => {
    return new Promise((resolve, reject) => {
        uni.request({
            method: type,
            url: baseUrl + url,
            data: date,
            header: header,
            dataType: 'json',         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;		
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default myRequest