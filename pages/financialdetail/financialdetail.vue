<template>
	<view>

		<view>
			<div v-for="(item,index) in records" :key="index" class="course-item">
				<div class="course-item-container" v-if="records.length">
					<div class="item-title">
						品名:{{item.name}}
					</div>
					<div class="course-item-tips">
						数量:{{item.count}}
					</div>
					<div class="course-item-tips">
						单价:{{item.price}}
					</div>
					
					<div class="course-item-tags">
						<span class="item-tags-g">总价 {{item.total}}</span>
						<span class="item-tags-y">状态 :
							<!-- <b style="color: green;" v-if="item.stockFlag==0">进货</b>
							<b style="color: red;" v-if="item.stockFlag==1">出货</b> -->
						{{item.stockFlag == 0 ? '进货' : '出货'}}
						</span>
						<span class="item-tags-time">时间 {{item.createTime}}</span>
					</div>
				</div>
				<!-- <div class="course-item-status" v-if="list.length">
					<van-button icon="/static/img/student/course/check.png" plain type="info" round class="checked-button" v-if="item.choose===1">已选</van-button>
					<van-button icon="plus" type="primary" round style="height:30px;" @click="openPopup(item)" v-if="item.choose===0&&!(item.max===item.current)"
					 :disabled="checkDisabled()">选课</van-button>
					<van-button icon="/static/img/student/course/stop.png" plain type="info" round class="stop-button" v-if="item.choose===0&&(item.max===item.current)">已满</van-button>
				</div> -->
			</div>
		</view>
	</view>

	</view>
</template>

<script>
	import checkTokenUtil from '../../utils/check_token.js'
	export default {
		data() {
			return {
				username: '',
				records: [],
				financialStatus: {},
				page: {
					current: 1,
					size: 5
				}
			}
		},
		onShow() {
			checkTokenUtil((res) => {
				if (res) {
					this.getStock();
				} else {
					uni.navigateTo({
						url: "../user/user"
					})
				}
			});

		},
		onLoad() {

		},
		onPullDownRefresh() {
			let tokenValue = uni.getStorageSync("tokenValue");
			this.page.current = this.page.current + 1;

			this.$myRequest('/financial/page', this.page, 'GET', {
				'satoken': tokenValue
			}).then(res => {
				let tempList = res.data.records;
				this.records = tempList.concat(this.records);
				uni.stopPullDownRefresh();
			}).catch(res => {
				uni.stopPullDownRefresh();
			})
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
			goback() {
				uni.navigateBack()
			},
			getStock() {
				let tokenValue = uni.getStorageSync("tokenValue");

				this.$myRequest('/financial/page', this.page, 'GET', {
					'satoken': tokenValue
				}).then(res => {
					this.records = res.data.records
				})
			},
			addStock() {
				//弃用
				let tokenValue = uni.getStorageSync("tokenValue");
				this.page.current = this.page.current + 1;

				this.$myRequest('/financial/page', this.page, 'GET', {
					'satoken': tokenValue
				}).then(res => {
					let tempList = res.data.records;
					this.records = this.records.concat(res.data.records);
					// console.log("two:" + JSON.stringify(this.records))
				})
			}

		}
	}
</script>

<style>
	.course-item{
	  min-height:145px;
	  margin-left: 85rpx;
	  width:80%;
	  border-radius:10px;
	  box-shadow: 0 0 10px 0 rgba(8, 51, 40, 0.1);
	  margin-top:15px;
	  background:#FFF;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	}
	.course-item-container{
	  padding-left:15px;
	  flex:1;
	}
	.item-title{
	  line-height: 25px;
	  font-size:15px;
	  font-weight:bold;
	  padding-left:20px;
	  /* background-image: url("/static/img/student/course/course.png"); */
	  background-repeat: no-repeat;
	  background-size: 12px;
	  background-position-y: 5px;
	  word-wrap: break-word;
	  word-break: break-all;
	  margin-top:15px;
	}
	.course-item-status{
	  text-align: center;
	  width:105px;
	  margin-left:15px;
	  flex-shrink: 0;
	}
	.course-item-tips{
	  font-size:12px;
	  color:#999999;
	  line-height:24px;
	  padding-left:20px;
	}
	.course-item-tags{
	  padding-left:20px;
	  margin-top:7px;
	  margin-bottom:15px;
	}
	
	.item-tags-g{
	/* margin-left:15px; */
	display: inline-block;
	width:160px;
	height:25px;
	line-height: 25px;
	border-radius: 2px;
	font-size:14px;
	color: #1BA784;
	border: 1px solid #ACE3D5;
	background: #DCFFF6;
	text-align: center;
	}
	
	.item-tags-time{
	/* margin-left:15px; */
	 margin-top: 10rpx;
	display: inline-block;
	width:160px;
	height:50px;
	line-height: 25px;
	border-radius: 2px;
	font-size:14px;
	color: #1BA784;
	border: 1px solid #ACE3D5;
	background: #DCFFF6;
	text-align: center;
	}
	
	.item-tags-y{
	  /* margin-left:15px; */
	  margin-top: 10rpx;
	  display: inline-block;
	  width:160px;
	  height:25px;
	  line-height: 25px;
	  border-radius: 2px;
	  font-size:14px;
	  color: #FF9D03;
	  border: 1px solid #F5C071;
	  background: #FFF1DC;
	  text-align: center;
	}
	
</style>
