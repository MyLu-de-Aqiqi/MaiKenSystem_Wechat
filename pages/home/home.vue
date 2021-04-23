<template>
	<view>
		<view class="top">
			<u-swiper border-radius="0" :duration="1000" @click="swiperChange" height="500" :list="imgList" mode="dot"
			 indicator-pos="bottomCenter" v-if="imgList.length>0"></u-swiper>
		</view>
		<view class="divider">
			<view class="front">为您推荐</view>
			<view class="rear">RECOMMENDED TO YOU</view>
		</view>
		<!-- 商品展示 -->
		<scroll-view scroll-y="true" class="coursewares" @scrolltolower="loadCW">
			<view class="courseware" v-for="(course,index) in records" :key="index" @click="switchToDtails(course)">
				<!-- <image class="cover" :src="getImgPath(course.cover)"></image> -->
				<view class="info">
					<view class="name">{{course.stockname}}</view>
					<view class="buy-num">库存余量: {{course.stocknumber}}</view>
					<view class="buy-num">备注: {{course.remark}}</view>
					<!-- <view class="price-addbtn">
						<view class="price">{{'￥'+course.price}}</view>
						<image src="../../static/icon/gouwuche.png"></image>
					</view> -->
				</view>
			</view>
		</scroll-view>
<!-- 		<view>
			<u-modal v-model="show" :show-cancel-button="true" :show-confirm-button="false" title="是否同意获取你的公开信息(头像,昵称)">
				<view class="center">
					<u-button type="primary" size="medium" open-type="getUserInfo" @getuserinfo="initUserInfo">
						确认
					</u-button>
				</view>
			</u-modal>
		</view> -->
	</view>
</template>

<script>

	// import {
	// 	getUserInfo
	// } from '@/utils/api.js'

	import checkTokenUtil from '../../utils/check_token.js'
	export default {
		data() {
			return {
				userInfo: "",
				coursewares: [],
				swiperList: [],
				imgList: [],
				start: 1,
				finish: false,
				show: false,
				records:[],
				page: {
					current: 1,
					size: 5
				}
			}
		},
		onShow() {
			
			checkTokenUtil((res)=>{
				this.getStock();
				
				// if(res){
				// 	this.getStock();
				// }else{
				// 	this.getStock();
				// 	// uni.showToast({
				// 	// 	title: '登陆了才可以看到商品哟~',
				// 	// 	icon: 'none'
				// 	// })
				// }
			});
			
		},
		methods: {
			//点击课件封面,如果课件的免费的,直接会进入详情页查看,如果是收费的会弹出收费
			getStock() {
				let tokenValue = uni.getStorageSync("tokenValue");

				this.$myRequest('/stock/page', this.page, 'GET', {
					'satoken': tokenValue
				}).then(res => {
					this.records = res.data.records
				})
			},
			switchToDtails(stock){
				uni.showToast({
					title: '请联系上海迈肯生物科技有限公司购买,联系微信:Miken57731377',
					icon: 'none'
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.top {
		.navbar {
			top: 60rpx;
			z-index: 2;
			position: absolute;
			color: white;
			width: 100%;
			text-align: center;
			font-size: 35rpx;
		}

		.background {
			width: 100vw;
		}
	}

	.coursewares {
		display: flex;
		flex-wrap: wrap;
		height: 100vh;

		.courseware {
			border-radius: 20rpx;
			background-color: white;
			position: relative;
			width: 47%;
			display: inline-block;
			margin: 0rpx 0 15rpx 15rpx;

			image {
				border-radius: 20rpx;

				width: 100%;
				height: 46.7vw;
				background-color: white;
			}

			.info {
				width: 100%;

				.buy-num {
					color: #dcdcdc;
					font-size: 25rpx;
					margin: 10rpx 0 5rpx 20rpx;

				}

				.name {
					margin-left: 20rpx;
					color: #2C405A;
				}

				.price-addbtn {
					display: flex;
					justify-content: space-between;
					padding: 10rpx 20rpx;

					.price {
						color: #7e7e00;
						font-weight: bold;
						font-size: 30rpx;
					}

					image {
						height: 40rpx;
						width: 44rpx;
					}
				}

			}
		}
	}

	.swiper {
		width: 100%;
		display: flex;
		justify-content: center;

		.swiper-box {
			width: 100%;
			height: 75.7vw;
			overflow: hidden;
			// border-radius: 15upx;
			// box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;

			swiper {
				width: 100%;
				height: 75.7vw;

				swiper-item {
					image {
						width: 100%;
						height: 75.7vw;
					}
				}
			}

			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;

				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;

					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}

	.center {
		display: flex;
		justify-content: center;
		padding: 50rpx 0;
	}

	.divider {
		display: flex;
		padding: 20rpx;
		align-items: flex-end;

		.front {
			font-size: 35rpx;
			font-weight: bold;
			margin-right: 10rpx;
		}

		.rear {
			font-size: 25rpx;
			color: #cccccc;
		}
	}
</style>
