/*订单列表页
* @Author: zhangjianzhong@yiside.com
* @Date: 2019-12-17 16:07:09
 * @Last Modified by: 高展飞
 * @Last Modified time: 2020-05-21 19:18:19
*/
<template>
	<!--待约车-->
	<section class="order-list-wrapper" @keydown.enter="searchHandle">
		<!-- <Title :title ="title[currentRouteName]"></Title> -->
		<!--搜索和筛选-->
		<el-form :inline="true" :model="query" class="demo-form-inline" label-position="right" label-width="72px">
		  <el-form-item label="物流单号:" v-if="!isUnrelation" prop="logisticsNumber">
		    <el-input  placeholder="请输入物流单号"  v-model="query.logisticsNumber" size="medium" clearable></el-input>
		  </el-form-item>
			<el-form-item label="供应商:" prop="supplierShortName">
		    <el-input placeholder="请输入供应商" v-model="query.supplierShortName" size="medium" clearable></el-input>
		  </el-form-item>
			<el-form-item label="客户名称:" prop="clientShortName">
		    <el-input placeholder="请输入客户名称" v-model="query.clientShortName" size="medium" clearable></el-input>
		  </el-form-item>
		  <el-form-item label="订单状态:" v-if="orderStatusVisible" prop="carrierOrderStatus">
		    <!-- 订单状态下拉列表-只有全部订单页才展示 -->
				<el-select v-model="query.carrierOrderStatus"  size="medium"
						placeholder="选择订单类型" >
					<el-option v-for="(item,index) in orderStatusList" :key="index" :label="item.name" :value="item.status"></el-option>
				</el-select>
		  </el-form-item>
			<el-form-item v-if="!isUnrelation" label="承运商:" prop="carrierId" clearable>
		    <el-select  placeholder="请选择承运商"  v-model="query.carrierId" clearable size="medium">
      		<el-option
      	    v-for="(item,index) in carrierList"
      	    :key="index"
      	    :label="item.name"
      	    :value="item.id">
					</el-option>
      	</el-select>
		  </el-form-item>
			<el-form-item label="提货日期:" v-if="isHistoryOrderPage || isUnrelation" prop="rangeDate">
		    <!-- 起止时间-只有历史订单和ds未关联订单页才展示 -->
				<el-date-picker   v-model="rangeDate" size="medium"
					type="datetimerange" range-separator="-" value-format="yyyy-MM-dd HH:mm:ss"
					start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
		  </el-form-item>
		  <el-form-item class="reset" :class="isHistoryOrderPage ? 'reset1':''">
		    <!-- <el-button type="primary" @click="onSubmit">查询</el-button> -->
				<el-button type="primary" @click="searchHandle" size="medium">搜  索</el-button>
				<el-button type="primary" size="medium" :loading="downLoading" @click="orderExportHandle" v-if="isHistoryOrderPage && !isUnrelation">
					<i class="icon icon-export" style="vertical-align: bottom;"></i>导  出
				</el-button>
		  </el-form-item>
		</el-form>
		<!-- table列表 -->
		<el-table
      :data="tableDatas"
      style="width: 100%"
			border>
				<el-table-column
        		prop="logisticsNumber"
        		label="物流单号"
						width="170"
						class="columm"
						align="center">
						<template slot-scope="scope">
							<el-badge   is-dot class="item us-cell-blue" :hidden="isHistoryOrderPage || isUnrelation?true:scope.row.carrierOrderUnread" @click.native="jumpDetailPage(scope.row[scope.column.property])">
										{{scope.row[scope.column.property]}}
						</el-badge>
						</template>
				</el-table-column>
      	<el-table-column
				v-for="item in tableHeader"
				:key="item.prop"
				:prop="item.prop"
				:label="item.label"
        align="center"
				show-overflow-tooltip
				>
				<template slot-scope="scope" >
					<!-- <el-badge v-if="item.prop ==='logisticsNumber'"  is-dot class="item us-cell-blue" :hidden="isHistoryOrderPage?true:item.carrierOrderUnread" @click.native="jumpDetailPage(scope.row[scope.column.property])">
									{{scope.row[scope.column.property]}}
					</el-badge> -->
					<div v-if="item.prop ==='clientShortName'" class="client_container">
						<div class="client-name-text"  :class="scope.row.clientLevel === null ? '':''">
							{{ scope.row.clientShortName }}
						</div>
						<!-- 客户级别图标 -->
						<img v-if="scope.row.clientLevel !== null" class="client-level-icon" :src="getLevelIcon(scope.row.clientLevel)" />
						<!-- <div v-if="scope.row.clientLevel === null" class="client-level-icon"></div> -->
					</div>
					<div v-else-if="item.prop ==='deliveryAddressAreaNames'">
						{{ scope.row.deliveryAddressAreaNames.split(',')[0] }}
					</div>
					<div v-else-if="item.prop ==='takingDate' || item.prop ==='deliveryDate'">
						{{ scope.row[scope.column.property] | formatDate }}
					</div>
					<div v-else-if="item.prop ==='carrierOrderStatus' " :class="carrierOrderStatusClass[scope.row.carrierOrderStatus]"  :style="{color:carrierOrderStatusClass[scope.row.carrierOrderStatus]}">
						{{ carrierOrderStatusNameMap[scope.row.carrierOrderStatus] }}
					</div>
					<div v-else>{{scope.row[scope.column.property]}}</div>
				</template>
			</el-table-column>
      <el-table-column
				v-if="!isHistoryOrderPage"
        prop=""
        label="操作"
				align="center"
				fixed="right">
				<template slot-scope="scope">
					<el-button v-if="isUnrelation"  type="text" @click.native="jumpDetailPage(scope.row.logisticsNumber)">查看</el-button>
					<el-button v-if="!isUnrelation" type="text" @click="jumpEditPage(scope.row.logisticsNumber)">编辑</el-button>
					<el-button v-if="isUnassignOrder(scope.row.carrierOrderStatus)" type="text"
							@click="unassignConfirmHandle(scope.row)">取消分配</el-button>
				</template>
      </el-table-column>
    </el-table>
	

		<!-- 分页条 -->
		<el-pagination class="page" @current-change="pageNumChangeHandle" :current-page.sync="query.page"
			layout="total, prev, pager, next" :total="total"></el-pagination>
	</section>
</template>

<script>
	import {
		formatDate
	} from '@/assets/js/Time'

	import A from '@/assets/picture/leval/A.png';
	import B from '@/assets/picture/leval/B.png';
	import C from '@/assets/picture/leval/C.png';
	import D from '@/assets/picture/leval/D.png';
	import S from '@/assets/picture/leval/S.png';
	const levelImgs = {
		A,
		B,
		C,
		D,
		S,
	};
	import Title from '../Inventory/common/Title'
	export default {
		name: 'common-order-list',
		components:{
			Title
		},
		data(){
			return {
				relationList:[
          {
              status: null,
              name: '全部'
          },
          {
              status: 0,
              name: '未关联DS单号'
          },
          {
              status: 1,
              name: '已关联DS单号'
          },
        ],
				query: {
					// 物流单号
					logisticsNumber: '',
					// 承运商名称（简称）
					supplierShortName: '',
					// 客户名称（简称）
					clientShortName: '',
					// 订单状态
					carrierOrderStatus: '',
					time:'',
					// 历史订单中的开始时间和结束时间
					beginDate: '',
					endDate: '',

					// 当前页码
					page: 1,
					//承运商id
					carrierId:null,
				},
				queryParams: {},

				tableDatas: [],
				total: 1,
				loading: true,

				// 是否正在请求现在excel中
				downLoading: false,
				carrierList:[],
				tableHeader:[
					// {
					// 	prop:'logisticsNumber',
					// 	label:'物流单号'
					// },
					{
						prop:'supplierShortName',
						label:'供应商'
					},
					{
						prop:'clientShortName',
						label:'客户名称'
					},
					{
						prop:'deliveryAddressAreaNames',
						label:'送货地址'
					},
					{
						prop:'takingDate',
						label:'提货日期'
					},
					{
						prop:'deliveryDate',
						label:'送货日期'
					},
					{
						prop:'carrierOrderStatus',
						label:'状态'
					}
				]
			}
		},
		methods: {
			getNormalCarriers() {
        let url = '/api/sys/carrier/getNormalCarriers'
        this.$axios.get(url) 
            .then(res=> {
                if(res.data.code=== 200) {
									this.carrierList =res.data.data
                }
            })
      },
			// 获取对应用户级别图片
			getLevelIcon(clientLevel) {
				return clientLevel === null ? '' :levelImgs[clientLevel.slice(0, 1)];
			},
			/**刷新表格数据 */
			refreshTable(){
				this.findList(this.$route.query);
			},
			// 获取列表数据
			findList({ page = 1, ...params }) {
				this.query = {
					// 保留页面上录入的值
					...this.query,
					// 合并替换页面上的值
					...params,
				};
				// 实际要查询的条件
				this.queryParams = {
					page: page - 0,
					limit: 10,
					...params,
					carrierOrderStatus: this.currentCarrierOrderStatus,
				};

				// 订单状态
				if (params.carrierOrderStatus === '') {
					delete params.carrierOrderStatus;
				}
				// 物流单号
				if (params.logisticsNumber === '') {
					delete params.logisticsNumber;
				}
				// 供应商名称
				if (params.supplierShortName === '') {
					delete params.supplierShortName;
				}
				// 客户名称
				if (params.clientShortName === '') {
					delete params.clientShortName;
				}

				// 显示加载状态
				this.loading = true;

				this.$axios.post(this.apiUrl, this.queryParams).then(res => {
					// 关闭加载状态
					this.loading = false

					// 设置页码
					this.query.page = page - 0;

					if (res.data.code === 200) {
						// 对列表数据的送货地址列容错
						this.tableDatas = res.data.data.rows.map(v=>{
							v.deliveryAddressAreaNames = v.deliveryAddressAreaNames || '';
							return v;
						})
						this.total = res.data.data.total
					} else if (res.data.code !== 1006) {
						// 错误提示
						this.$alert(res.data.message, '错误', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'error',
									message: res.data.message
								});
							}
						});
					}
				});
			},
			// 路由跳转，通过路由跳转来执行获取列表数据
			jumpRoute() {
				this.$router.replace({
					name: this.currentRouteName,
					query: {
						...this.queryParams,
						_: Date.now(),
					},
				});
			},
			//搜索
			searchHandle() {
				// 搜索后，页码重置为1
				this.query.page = 1;
				// 更新实际查询参数
				this.queryParams = {
					...this.query,
				};

				this.jumpRoute();
			},
			pageNumChangeHandle(page) {
				this.query.page = page;
				this.queryParams.page = page;

				this.jumpRoute();
			},
			// 跳转到详情页
			jumpDetailPage(logisticsNumber) {
				this.$router.push({
					name: `${ this.currentRouteName }Detail`,
					query: {
						logisticsNumber,
					}
				});
			},
			// 跳转到编辑详情页
			jumpEditPage(logisticsNumber) {
				this.$router.push({
					name: `${ this.currentRouteName }Edit`,
					query: {
						logisticsNumber,
					}
				});
			},
			orderExportHandle(){
				const {
					beginDate,
					endDate,
				} = this.queryParams;

				const beforeTwoMonth = 1000 * 60 * 60 * 24 * 30 * 2;

				const begin_date = new Date(beginDate).getTime();
				// 两月前的时间戳
				const limit = Date.now() - beforeTwoMonth;

				if(begin_date > limit || !beginDate){
					console.log('可以下载');

                    this.downExcelHandle();
				}else{
					// 时间必须控制在两个月内
					this.$notify.warning({
						title: '提示',
						message: `开始时间：${ beginDate } 超出范围，时间控制在两个月内`,
					});
					return;
				}
			},
			/**是否为承运商待分配订单 */
			isUnassignOrder(carrierOrderStatus){
				return 1 === carrierOrderStatus;
			},
			unassignConfirmHandle({ logisticsNumber }){
				this.$confirm('确定要取消分配此订单吗？', '提示', {
					type: 'wraning'
				}).then(async ()=>{
					let url = `/api/sys/carrierOrder/cancelAllocationCarrier/${ logisticsNumber }`;

					const { data: { code, message, } } = await this.$axios.get(url);

					if(code === 200){
						// 成功提示
						this.$notify.success({
							message: '取消分配成功',
						});

						// 刷新列表
						this.refreshTable();
					}else{
						this.$notify.error({
							message,
						});
					}
				}).catch(()=>{});
			},
            downExcelHandle() {
				let url = '/api/sys/carrierHistoryOrder/exportExcelCarrierOrder';

				this.downLoading = true;

                this.$axios({
                    method: 'post',
                    responseType: 'blob',
                    url,
                    data: this.queryParams,
                }).then((res)=>{
					this.downLoading = false;

					let url = window.URL.createObjectURL(res.data)

					let a = document.createElement('a');
                    a.href = url;
					a.download = res.headers['filename']+'.xls';
					document.body.appendChild(a);
                    a.dispatchEvent(new MouseEvent('click'));
					a.href = 'javascript:void(0)';
					document.body.removeChild(a);
                });
            },
		},
		computed: {
			// 订单状态名称映射
			carrierOrderStatusNameMap() {
				return {
					0: '待约车',
					1: '待分配',
					2: '装货中',
					3: '装货待审批',
					4: '运输中',
					5: '卸货待审批',
					6: '运输完成',
					7: '订单取消',
				};
			},
			// 订单状态文字样式
			carrierOrderStatusClass() {
				return {
					0: 'us-td-red',
					1: 'us-td-green',
					2: 'us-td-orange',
					3: 'us-td-orange',
					4: 'us-td-orange',
					5: 'us-td-orange',
					6: 'us-td-green',
					7: 'us-td-green',
				};
			},
			// 订单状态选项列表
			orderStatusList() {
				return [
					{
						status: '',
						name: '全部'
					},
					{
						status: '0',
						name: '待约车'
					},
					{
						status: '1',
						name: '承运商待分配'
					},
					{
						status: '2',
						name: '装货中'
					},
					{
						status: '4',
						name: '运输中'
					}
				];
			},
			// 订单状态下拉框是否显示
			orderStatusVisible(){
				return /^(Allorder)$/.test(this.currentRouteName);
			},
			// 是否为历史订单页
			isHistoryOrderPage(){
				return /^(TransportComplete)$/.test(this.currentRouteName);
			},
			// 是否为DS未关联订单
			isUnrelation(){
				return /^(Unrelation)$/.test(this.currentRouteName);
			},
			// 当前路由地址名称
			currentRouteName(){
				return this.$route.name;
			},
			title() {
				return {
					'Allorder':'全部订单列表',
					'StayaboutCar':'待约车列表',
					'CarrierAllocated':'承运商待分配列表',
					'FortheLoading':'装货中列表',
					'Intransit':'运输中列表',
					'TransportComplete':'运输完成列表',
					'Unrelation':'DS未关联订单列表'
				}
			},
			currentCarrierOrderStatus(){
				if(this.orderStatusVisible){
					// return this.queryParams.carrierOrderStatus;
					return this.$route.query.carrierOrderStatus;
				}else{
					return {
						StayaboutCar: 0,
						CarrierAllocated: 1,
						FortheLoading: 2,
						Intransit: 4,
					}[this.currentRouteName];
				}
			},
			apiUrl(){
				if(this.isHistoryOrderPage){
					return '/api/sys/carrierHistoryOrder/queryPageHistoryCarrierOrder';
				}else if(this.isUnrelation){
					return '/api/sys/carrierHistoryOrder/pageNoDsHistoryOrder'
				}else{
					return '/api/sys/carrierOrder/queryPageCarrierOrder';
				}
			},
			rangeDate: {
				get(){
					return [this.query.beginDate, this.query.endDate];
				},
				set(val){
					if(val){
						[this.query.beginDate, this.query.endDate] = val;
					}else{
						this.query.beginDate = '';
						this.query.endDate = '';
					}
				},
			},
		},
		watch: {
			$route: {
				immediate: true,
				handler(){
					this.findList(this.$route.query);
					this.getNormalCarriers()
				},
			},
		},
		created(){
			// if(this.currentCarrierOrderStatus){}
			// this.queryParams
		},
		// beforeRouteEnter(to, from, next) {
		// 	next(vm => {
		// 		// 初始化搜索条件（回显搜索条件）
		// 		vm.findList(to.query);
		// 	});
		// },
		// beforeRouteUpdate(to, from, next) {
		// 	this.findList(to.query);
		// 	next();
		// },
		filters: {
			formatDate(time) {
				var date = new Date(time);
				return formatDate(date, "yyyy/MM/dd hh:mm");
			}
		},
	}
</script>

<style lang="scss" scoped>
	.order-list-wrapper {
		.demo-form-inline {
			border-bottom: 1px dashed #e5e5e5;
      margin: 20px  0 ;
      .el-form-item{
        margin-right: 20px;
      }
			.el-select{
				width: 179px;
			}
			.el-input{
				width: 179px;
			}
      .reset {
				float: right;
        margin-right: 0px;
      }
			.reset1{
				float: none;
				display: flex;
				justify-content: flex-end;
			}
    }
		.el-table{
			&>>>.cell{
				/* overflow:visible !important ; */
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.el-badge{
				color: #66b1ff;
				cursor: pointer;
			}
			.client_container{
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				.client-name-text {
					width: 93px;
					height: 40px;
					line-height: 40px;
					display: inline-block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.client-level-icon{
					height: 40px;
					width: 32.5px;
				}
			}
		}
		// 顶部搜索条
		/* .query-condition-bar {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			padding-bottom: 35px;
			margin-bottom: 35px;
			border-bottom: 1px dashed #ebebeb;
			&>>>.el-input{
				width: 200px;
				margin-right: 20px;
			}

			.el-date-editor{
				width: 300px;
			}

			.remaining {
				width: 59px;
			}
		}

		.order_table {
			.client-name-text {
				width: 126px;
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.client-level-icon {
				position: absolute;
				top: 27px;
				right: 0;
				height: 40px;
				width: 32.5px;
			}
		} */
	}
</style>