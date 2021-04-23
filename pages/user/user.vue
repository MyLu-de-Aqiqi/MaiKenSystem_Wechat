<template>
	<view>
		<view class="user-head">
			<image class="background" src="../../static/img/background.jpg"></image>
			<view class="user-wrapper">
				<view class="user-section">
					<view class="user-info" @click="switchPage('check-login')">
						<!-- <image mode="widthFix" :src="getImgPath(adminInfo.avatar)" v-if="adminInfo.avatar"></image> -->
						<image mode="widthFix" src="../../static/logo.jpg" ></image>
						<view class="username">
							<text class="name">{{adminInfo.name?adminInfo.name:"您还未登录,点击登录"}}</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="divider">
			<view class="front">我的服务</view>
			<view class="rear">MY SERVICE</view>
		</view>
		<view class="functions">
			<view class="function" @click="switchPage('financialflow')">
				<!-- <image class="icon" src="../../static/icon/myInfo.png"></image> -->
				<u-icon name="rmb-circle-fill"  size="58"></u-icon>
				<button class="name" size="mini" plain="">流水查看</button>
			</view>
			
			<view class="function" @click="switchPage('financialDetail')">
				<!-- <image class="icon" src="../../static/icon/zixun.png"></image> -->
				<u-icon name="eye"  size="58"></u-icon>
				<button class="name" size="mini" plain="">流水详情</button>
			</view>
			
			<view class="function" @click="switchPage('stock')">
				<!-- <image class="icon" src="../../static/icon/courseware.png"></image> -->
				<u-icon name="car"  size="58"></u-icon>

				<button class="name" size="mini" plain>库存管理</button>
			</view>
			
			<!-- <view class="function">
				<image class="icon" src="../../static/icon/share.png"></image>
				<button class="name" open-type="share" size="mini" plain>分享好友</button>
			</view>
			<view class="function" @click="show=true">
				<image class="icon" src="../../static/icon/lianxi.png"></image>
				<button class="name" size="mini" plain>联系客服</button>
			</view> -->
			<view class="function" @click="signOut" v-if="adminInfo != null">
				<image class="icon" src="../../static/icon/signOut.png"></image>
				<button class="name" size="mini" plain>退出登录</button>
			</view>
		</view>
		<u-modal v-model="show" :show-cancel-button="true" title=" ">
			<view class="kefu-content">
				<image class="kefu" src="../../static/icon/kefu.jpg"></image>
			</view>
		</u-modal>
	</view>
</template>

<script>
	// import {
	// 	mapState
	// } from 'vuex'
	import checkTokenUtil from '../../utils/check_token.js'
	export default {
		computed: {
			// ...mapState(['userInfo'])
		},
		data() {
			return {
				show: false,
				adminInfo:null,
				checckTokenFlag:false
			};
		},
		onShow() {
			//异步的问题，不太好
			//友好的checkToken
			checkTokenUtil((res)=>{
				if(res){
					// return true;
					let adminInfo = uni.getStorageSync("adminInfo");
					this.adminInfo = adminInfo.admin
				}else{
					// return false;
				}
			});
		},
		methods: {
			signOut() {
				let tokenValue = uni.getStorageSync("tokenValue");
				
				this.$myRequest('/admin/logout', {}, 'GET', {
					'satoken': tokenValue
				}).then(res => {
					if(res.code == '200'){
						uni.showToast({
							title: '注销成功',
							icon: 'success'
						})
						//刷新页面 -- 更新数据也可以
						this.adminInfo = null
					}else{
						uni.showToast({
							title: '注销失败',
							icon: 'err'
						})
					}
				})
			},
			switchPage(value) {
				if(value == 'check-login'){
					checkTokenUtil((res)=>{
						if(res){
							 console.log("测试")
						}else{
							uni.navigateTo({
								url: "../login/login"
							})
						}
					});
				}else if(value == 'financialflow'){
					checkTokenUtil((res)=>{
						if(!res){
							uni.showToast({
								title: '你还没有登陆～',
								icon: 'error'
							})
						}else{
							let adminInfo = uni.getStorageSync("adminInfo");
							//拿到当前登陆用户的角色
							//拿到当前用户的信息，判断角色，如果是超级管理员，就可以查看，否则弹出错误
							if(adminInfo.admin.roles[0].roleName == '超级管理员'){
								console.log("跳转财务页面")
								uni.navigateTo({
									url: "../financialflow/financialflow"
								})
								
							}else{
								uni.showToast({
									title: '当前账号无权限',
									icon: 'error'
								})
							}
						}
					});
				}else if(value == 'stock'){
					checkTokenUtil((res)=>{
						if(!res){
							uni.showToast({
								title: '你还没有登陆～',
								icon: 'error'
							})
						}else{
							let adminInfo = uni.getStorageSync("adminInfo");
							//拿到当前登陆用户的角色
							//拿到当前用户的信息，判断角色，如果是超级管理员，就可以查看，否则弹出错误
							if(adminInfo.admin.roles[0].roleName == '超级管理员'){
								console.log("跳转库存页面")
								uni.navigateTo({
									url: "../stock/stock"
								})
								
							}else{
								uni.showToast({
									title: '当前账号无权限',
									icon: 'error'
								})
							}
						}
					});
				}else if(value == 'financialDetail'){
					checkTokenUtil((res)=>{
						if(!res){
							uni.showToast({
								title: '你还没有登陆～',
								icon: 'error'
							})
						}else{
							let adminInfo = uni.getStorageSync("adminInfo");
							//拿到当前登陆用户的角色
							//拿到当前用户的信息，判断角色，如果是超级管理员，就可以查看，否则弹出错误
							if(adminInfo.admin.roles[0].roleName == '超级管理员'){
								console.log("跳转库存页面")
								uni.navigateTo({
									url: "../financialdetail/financialdetail"
								})
								
							}else{
								uni.showToast({
									title: '当前账号无权限',
									icon: 'error'
								})
							}
						}
					});
				}
			},
			switchTab(value) {
				uni.switchTab({
					url: value
				})
			},
			handleZixun() {
				uni.showToast({
					title: '待开发中',
					icon: 'loading'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fcfcfc;
	}

	.user-head {
		position: relative;

		.background {
			position: relative;
			max-width: 100%;
			max-height: 500.35upx;
			width: 100%;
		}

		.user-wrapper {
			position: absolute;
			width: 100%;
			display: flex;
			justify-content: center;
			bottom: -75rpx;

			.user-section {
				box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
				position: relative;
				width: 100%;
				height: 150rpx;
				background-color: white;
				float: right;
				margin: 20upx 40upx;
				padding: 20upx;
				border-radius: 10upx;

				.user-info {
					position: absolute;
					top: -60rpx;
					left: 70rpx;
					display: flex;
					align-items: flex-end;

					image {
						width: 140.67rpx;
						height: 140.67rpx;
						border-radius: 50%;
						margin-right: 50rpx;
						box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);

					}

					.username {
						margin-bottom: 20rpx;

						.name {
							font-weight: bold;
							font-size: 35rpx;
							margin-right: 20rpx;
						}
					}
				}
			}
		}

	}



	.functions {
		box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
		background-color: white;
		margin: 0 40upx;
		padding: 40upx 20upx;
		border-radius: 10upx;
		display: flex;
		// justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;

		.function {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 25%;

			.name {
				background-color: white;
				border: 0;
				padding: 10rpx 0;
				color: #9e9e9e;
				font-size: 25rpx;
				// padding: 0;
			}
		}
	}

	.icon {
		width: 55rpx;
		height: 50rpx;
	}

	.kefu-content {
		width: 100%;
		display: flex;
		justify-content: center;

		.kefu {
			width: 400rpx;
			height: 592rpx;
		}
	}

	.divider {
		margin-top: 70upx;
		display: flex;
		padding: 40rpx 0 10rpx 40rpx;
		align-items: flex-end;

		.front {
			font-size: 35rpx;
			font-weight: bold;
			margin-right: 10rpx;
		}

		.rear {
			font-size: 25rpx;
			color: #c3c3c3;
		}
	}
</style>
