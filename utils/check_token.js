
import myRequest from './base_api.js'
const checkToken = function(callBack){
	let tokenValue = uni.getStorageSync("tokenValue");
	if(tokenValue != null && tokenValue != ""){	
		myRequest('/admin/tokenVerify',{},'GET',{
			'satoken': tokenValue
		}).then(res=>{
			
			if(callBack){
				// callBack(res);
				if(res.msg == 'OK'){
					callBack(true);
				}else{
					//校验不通过，就讲token删除掉
					uni.removeStorageSync("tokenValue");
					callBack(false);
					// return false;
				}
			}
		})
	}else{
		callBack(false);
	}
}
			
			
export default checkToken