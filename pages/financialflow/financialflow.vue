<template>
	<view>
		<!-- 展示一个列表，财务情况的列表 -->		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今日进货流水  &nbsp;
			  <span class="item-tags-y">{{financialStatus.inDayFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      本月进货流水 &nbsp; 
			  <span class="item-tags-g">{{financialStatus.inMonthFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今年进货流水 &nbsp;
			  <span class="item-tags-y">{{financialStatus.inYearFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今日出货流水 &nbsp;
			  <span class="item-tags-g">{{financialStatus.outDayFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      本月出货流水 &nbsp;
			  <span class="item-tags-y">{{financialStatus.outMonthFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今年出货流水 &nbsp;
			  <span class="item-tags-g">{{financialStatus.outYearFinancial}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今日纯毛利润 &nbsp;
			  <span class="item-tags-y">{{financialStatus.dayGrossProfit}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      本月纯毛利润 &nbsp;
			  <span class="item-tags-g">{{financialStatus.monthGrossProfit}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		
		<view  class="course-item">
		  <view class="course-item-container" >
		    <view class="item-title" >
		      今年纯毛利润 &nbsp;
			  <span class="item-tags-y">{{financialStatus.yearGrossProfit}} 元</span>
		    </view>
		    <view class="course-item-tips">
		      <!-- 编码：{{item.code}} -->
		    </view>
		    <view class="course-item-tips">
		      <!-- 上限{{item.max}} / 下限{{item.min}} / 已选{{item.current}} -->
		    </view>
		    <view class="course-item-tags">
		      <!-- <span class="item-tags-y">{{item.classHour}}课时</span> -->
		    </view>
		  </view>
		</view>
		
		<view>
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	import checkTokenUtil from '../../utils/check_token.js'
	export default {
		data() {
			return {
				username:'',
				records:[],
				financialStatus:{}
			}
		},
		onShow() {
			checkTokenUtil((res)=>{
				if(res){
					this.getFinancialFlow();
				}else{
					// return false;
					uni.navigateTo({
						url: "../user/user"
					})
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
			getFinancialFlow(){
				let tokenValue = uni.getStorageSync("tokenValue");
				this.$myRequest('/financial/getFinancialStatus',{},'GET',{
					'satoken': tokenValue
				}).then(res=>{
					this.financialStatus = res.data
					// console.log("f:"+JSON.stringify(this.financialStatus))
				})
			}
		}
	}
</script>

<style>
	.course-item{
	  min-height:45px;
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
	margin-left:15px;
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
	
	.item-tags-y{
	  margin-left:15px;
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
