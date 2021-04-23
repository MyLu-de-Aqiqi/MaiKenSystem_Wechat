<template>
	<view>
		
		<view class="nav" @click="goback">
			<u-icon name="arrow-left" size="45" color="#e7e7e7"></u-icon>
		</view>
		<image class="background" src="../../static/background.jpg"></image>
		<view class="main">
			<view class="center">
				<view class="logo">
					<image mode="widthFix" src="../../static/logo.jpg"></image>
				</view>
				<view class="form">
					<!-- <button class="btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信一键登录</button> -->
					
					<u-input class="btn"  v-model="username" type="text" :border="border"  placeholder="请输入账号"/>
					<u-input class="btn" style="margin-top: 15rpx;" v-model="password" type="password" :border="border" placeholder="请输入密码" />
					
					<u-input class="btn" v-if="openIdStr != null" style="margin-top: 15rpx;"  v-model="openIdStr" type="text" :border="border"  placeholder="openId"/>
					
					<u-loading :show="loadingFlag" mode="flower" size="99"></u-loading>
					<u-button type="primary" size="medium" style="margin-top: 15rpx;" @click="login()">登陆</u-button>
					
					<u-button type="primary" size="medium" open-type="getUserInfo" style="margin-top: 15rpx;" @getuserinfo="wxLogin">一键登陆</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import md5 from "@/utils/md5.min.js";
	import {cwUrl} from '@/utils/env.js'
	import checkTokenUtil from '../../utils/check_token.js'
	export default {
		data() {
			return {
				username:'',
				password:'',
				checckTokenFlag:false,
				openIdStr: null,
				loadingFlag:false
			}
		},
		onShow() {
			checkTokenUtil((res)=>{
				if(res){
					uni.navigateTo({
						url: "../user/user"
					})
				}else{
					// return false;
				}
			});
			
		},
		onLoad() {

		},
		onUnload() {
			uni.navigateTo({
				url: "../user/user"
			})
		},
		onHide() {
			uni.navigateTo({
				url: "../user/user"
			})
		},
		methods: {
			goback(){
				uni.navigateBack()
			},
			loading(){
				this.loadingFlag = !this.loadingFlag;
			},
			pay(){
				// const unipay = require('unipay')
			},
			wxLogin(e){
				console.log("demo:"+JSON.stringify(e.detail.userInfo))
				
				let that = this;
				that.loadingFlag = true;
				
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    // console.log("loginRes.authResult:"+loginRes.code);
					
					that.$myRequest('/admin/acceptWxCode',{code:loginRes.code},'GET').then(res=>{
						if(res.code == '200'){
							uni.setStorageSync('tokenValue',res.data.tokenInfo.tokenValue);
							
							uni.setStorageSync('adminInfo',res.data);
							
							that.loadingFlag = false;
							uni.reLaunch({
								url: '../user/user'
							})
						}else if(res.code = '500'){
							that.openIdStr = res.data;
							
							uni.showToast({
								title: res.msg,
								icon: "none"
							})
						}
					})
					
					
					
					
				  }
				});
			},
			
			login(){
				let wxAuth = {
					username:this.username,
					password:this.password
				}
				this.$http("/admin/login", "get", wxAuth).then((res) => {
					
					if (res.data.code == 200 && res.data.data.tokenInfo) {
						
						uni.setStorageSync('tokenValue',res.data.data.tokenInfo.tokenValue);
						
						uni.setStorageSync('adminInfo',res.data.data);
						
						uni.reLaunch({
							url: '../user/user'
						})
					} else {
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					}
				})
			}
			
		}
	}
</script>

<style lang="scss">
	.nav {
		margin-left: 20rpx;
		position: absolute;
		z-index: 1;
		top: 60rpx;
	}

	.main {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;

		.center {
			margin-top: 300rpx;
			width: 500rpx;
			height: 500rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;

			.logo {
				display: flex;
				justify-content: center;

				image {
					box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
					width: 230rpx;
					height: 230rpx;
					border-radius: 50%;
					margin-bottom: 50rpx;
				}
			}

			.form {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.btn {
					margin: 0;
					color: #000;
					// width: 200rpx;
					width: 90%;
					height: 90upx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 5upx;
					background-color: #fff;
					font-size: 40upx;
					border-radius: 15rpx;
				}
			}
		}
	}



	.background {
		left: -40vw;
		position: absolute;
		width: 100vh;
		z-index: -1;
		height: 100vh;
	}
</style>
