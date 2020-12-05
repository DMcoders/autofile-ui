<template>
  <div class="app-container">
    <el-container>
      <!--左侧-->
      <el-aside width="18%" style="background-color: #FFFFFF">
        <div>
          <el-button
            type="primary"
            icon="el-icon-plus"
            size="mini"
            @click="handleAdd"
            style="width:100%"
          >新增
          </el-button>
        </div>
        <el-tree :data="productMenu" :props="productMenu" @node-click="handleNodeClick" defaultExpandAll highlight-current></el-tree>
      </el-aside>
      <!--主题-->
      <el-main>
        <el-row>
          <div class="text-center">
            <el-input
              id="keyWordInput"
              v-model="keyWord"
              style="width: 100%;"
              placeholder="快速搜索"
              clearable
              size="medium"
              prefix-icon="el-icon-search"
              @keyup.enter.native="handleQuery"
            />
          </div>
        </el-row>

        <el-row>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未分发" name="noHand">
              <el-col :span="18" class="card-box" v-for="(item,index) in filterNoDispatchList">
                <el-card>
                  <el-container>
                    <el-aside width="40%" style="padding:0;margin-bottom: 0;background-color: #FFFFFF">
                      <el-row>
                        <img :src="item.certificationImage" :onerror="defaultImg" class="image" height="150" width="100%">
                      </el-row>
                      <el-row style="font-size: 16px;">
                        <el-col :span="12">
                          {{item.certificationName}}
                        </el-col>
                        <el-col :span="12">
                          <el-button style="float: right;" type="text">
                            <i class="el-icon-share" style="color:#1890ff" @click="handleDispatch(item)"></i>&nbsp
                            <i class="el-icon-edit" style="color:#42b983" @click="handleUpdate(item)"></i>&nbsp
                            <i class="el-icon-delete" style="color:red" @click="handleDelete(item)"></i>
                          </el-button>
                        </el-col>
                      </el-row>
                    </el-aside>
                    <el-main>
                      <el-row class="row-space">
                        <el-col :span="10">
                          创建：
                        </el-col>
                        <el-col :span="7">
                          {{item.createEmployeeName}}
                        </el-col>
                        <el-col :span="7">
                          {{parseTime(item.certificationDate,'{y}-{m}-{d}')}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          出口洲/国家：
                        </el-col>
                        <el-col :span="14">
                          {{item.exportContinent}}/{{item.exportCountry}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          文件数量：
                        </el-col>
                        <el-col :span="14">
                          {{item.fileNum}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          填写进度：
                        </el-col>
                        <el-col :span="14">
                          <el-progress v-if="item.process==100" :text-inside="true" :stroke-width="22" :percentage="item.process" status="success"></el-progress>
                          <el-progress v-else :text-inside="true" :stroke-width="22" :percentage="item.process" status="warning"></el-progress>
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          状态：
                        </el-col>
                        <el-col :span="14">
                          {{item.status}}
                        </el-col>
                      </el-row>
                    </el-main>
                  </el-container>
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="填写中" name="write">
              <el-col :span="18" class="card-box" v-for="(item,index) in filterWriteList">
                <el-card>
                  <el-container>
                    <el-aside width="40%" style="padding:0;margin-bottom: 0;background-color: #FFFFFF">
                      <el-row>
                        <img :src="item.certificationImage" :onerror="defaultImg" class="image" height="150" width="100%">
                      </el-row>
                      <el-row style="font-size: 16px;">
                        <el-col :span="12">
                          {{item.certificationName}}
                        </el-col>
                      </el-row>
                    </el-aside>
                    <el-main>
                      <el-row class="row-space">
                        <el-col :span="10">
                          创建：
                        </el-col>
                        <el-col :span="7">
                          {{item.createEmployeeName}}
                        </el-col>
                        <el-col :span="7">
                          {{parseTime(item.certificationDate,'{y}-{m}-{d}')}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          出口洲/国家：
                        </el-col>
                        <el-col :span="14">
                          {{item.exportContinent}}/{{item.exportCountry}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          文件数量：
                        </el-col>
                        <el-col :span="14">
                          {{item.fileNum}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          填写进度：
                        </el-col>
                        <el-col :span="14">
                          <el-progress v-if="item.process==100" :text-inside="true" :stroke-width="22" :percentage="item.process" status="success"></el-progress>
                          <el-progress v-else :text-inside="true" :stroke-width="22" :percentage="item.process" status="warning"></el-progress>
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          状态：
                        </el-col>
                        <el-col :span="14">
                          {{item.status}}
                        </el-col>
                      </el-row>
                    </el-main>
                  </el-container>
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="finish">
              <el-col :span="18" class="card-box" v-for="(item,index) in filterFinishList">
                <el-card>
                  <el-container>
                    <el-aside width="40%" style="padding:0;margin-bottom: 0;background-color: #FFFFFF">
                      <el-row>
                        <img :src="item.certificationImage" :onerror="defaultImg" class="image" height="150" width="100%">
                      </el-row>
                      <el-row style="font-size: 16px;">
                        <el-col :span="12">
                          {{item.certificationName}}
                        </el-col>
                      </el-row>
                    </el-aside>
                    <el-main>
                      <el-row class="row-space">
                        <el-col :span="10">
                          创建：
                        </el-col>
                        <el-col :span="7">
                          {{item.createEmployeeName}}
                        </el-col>
                        <el-col :span="7">
                          {{parseTime(item.certificationDate,'{y}-{m}-{d}')}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          出口洲/国家：
                        </el-col>
                        <el-col :span="14">
                          {{item.exportContinent}}/{{item.exportCountry}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          文件数量：
                        </el-col>
                        <el-col :span="14">
                          {{item.fileNum}}
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          填写进度：
                        </el-col>
                        <el-col :span="14">
                          <el-progress v-if="item.process==100" :text-inside="true" :stroke-width="22" :percentage="item.process" status="success"></el-progress>
                          <el-progress v-else :text-inside="true" :stroke-width="22" :percentage="item.process" status="warning"></el-progress>
                        </el-col>
                      </el-row>
                      <el-row class="row-space">
                        <el-col :span="10">
                          状态：
                        </el-col>
                        <el-col :span="14">
                          {{item.status}}
                        </el-col>
                      </el-row>
                    </el-main>
                  </el-container>
                </el-card>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-row>

      </el-main>
    </el-container>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="85%" @close="cancel" append-to-body fullscreen>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="选择车型" prop="autoTypeValue">
              <el-cascader style="width:100%"
                           v-model="form.autoTypeValue"
                           :options="autoTypeOptions"
                           :props="{ expandTrigger: 'hover' }"
                           clearable
                           filterable
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出口大洲/国家" prop="countryValue">
              <el-cascader style="width:100%"
                           v-model="form.countryValue"
                           :options="countryOptions"
                           :props="{ expandTrigger: 'hover' }"
                           clearable
                           filterable
              ></el-cascader>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="认证类别" prop="coverTitle">
              <el-select v-model="form.certificationCategory" filterable clearable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in certTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-transfer
              class="inputTransfer"
              v-model="selFiles"
              :data="allFiles"
              filterable
              :titles="['所有文件', '已选文件']"
              :render-content="renderFunc"
            ></el-transfer>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import { getUserProfile } from "@/api/system/user";
  import {getAutoCascader} from "@/api/vertify/autoManage";
  import {list as getAllFileList} from "@/api/vertify/standardFiles";
  import {addOrUpdate,getCertificationList,getOne,deleteCertification,certificationDispatch} from "@/api/vertify/certification";


  export default {
    name: "cert",

    computed: {
      defaultImg() {
        return 'this.src="' + require('../../../assets/image/profile.jpg') + '"';
      }
    },

    created() {
      this.getList();
      this.openLoading();
      this.getUser();
    },

    mounted() {
      this.productMenu = [
        {
          "menuType": "category",
          "label": "乘用车",
          "children": [
            {
              "menuType": "menu",
              "label": "轿车"
            },
            {
              "menuType": "menu",
              "label": "新能源乘用车"
            },
            {
              "menuType": "menu",
              "label": "运动型多用途车(SUV)"
            },
            {
              "menuType": "menu",
              "label": "商务车"
            }
          ]
        },
        {
          "menuType": "category",
          "label": "轻型商务车",
          "children": [
            {
              "menuType": "menu",
              "label": "轻卡"
            },
            {
              "menuType": "menu",
              "label": "多功能商务车"
            },
            {
              "menuType": "menu",
              "label": "皮卡"
            },
            {
              "menuType": "menu",
              "label": "小卡"
            },
            {
              "menuType": "menu",
              "label": "新能源轻卡"
            },
            {
              "menuType": "menu",
              "label": "新能源多功能商务车"
            },
            {
              "menuType": "menu",
              "label": "新能源皮卡"
            },
            {
              "menuType": "menu",
              "label": "新能源小卡"
            }
          ]
        },
        {
          "menuType": "category",
          "label": "中型商务车",
          "children": [
            {
              "menuType": "menu",
              "label": "窄体中重卡"
            },
            {
              "menuType": "menu",
              "label": "中体中重卡"
            },
            {
              "menuType": "menu",
              "label": "宽体中重卡"
            },
            {
              "menuType": "menu",
              "label": "新能源中重卡"
            }
          ]
        }
      ]

    },
    data() {
      return {
        user: {},
        // 查询参数
        keyWord: "",
        activeName: 'noHand',
        productMenu: [],
        noDispatchList: [],
        writeList: [],
        finishList: [],
        filterNoDispatchList: [],
        filterWriteList: [],
        filterFinishList: [],
        countryOptions: [{
          value:'亚洲',
          label:'亚洲',
          children: [{
            value:'中国',
            label:'中国',
          },{
            value:'日本',
            label:'日本',
          },{
            value:'韩国',
            label:'韩国',
          }]
        },{
          value:'欧洲',
          label:'欧洲',
          children: [{
            value:'英国',
            label:'英国',
          },{
            value:'德国',
            label:'德国',
          }]
        },{
          value:'北美洲',
          label:'北美洲',
          children: [{
            value:'加拿大',
            label:'加拿大',
          },{
            value:'美国',
            label:'美国',
          }]
        },{
          value:'南美洲',
          label:'南美洲',
          children: [{
            value:'墨西哥',
            label:'墨西哥',
          },{
            value:'巴西',
            label:'巴西',
          }]
        },{
          value:'非洲',
          label:'非洲',
          children: [{
            value:'南非',
            label:'南非',
          },{
            value:'利比亚',
            label:'利比亚',
          }]
        },,{
          value:'大洋洲',
          label:'大洋洲',
          children: [{
            value:'澳大利亚',
            label:'澳大利亚',
          },{
            value:'新西兰',
            label:'新西兰',
          }]
        }],
        autoTypeOptions: [],
        certTypes: [{
          value: '认证类型一',
          label: '认证类型一'
        }, {
          value: '认证类型二',
          label: '认证类型二'
        }, {
          value: '认证类型三',
          label: '认证类型三'
        }],
        // 加载层信息
        loading: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        form: {
          certificationCategory: '',
          autoTypeValue:[],
          countryValue:[]
        },
        // 标准组件穿梭框
        selFiles: [],
        allFiles: [],
        // 表单校验
        rules: {
          autoTypeValue: [
            {required: true, message: "车型不能为空", trigger: "change"}
          ],
          countryValue: [
            {required: true, message: "出口洲/国家不能为空", trigger: "blur"}
          ],
          coverSubTitle: [
            {required: true, message: "认证类别不能为空", trigger: "blur"}
          ]
        },
      };
    },
    watch: {
      keyWord:function (val) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (val && val.length > 0) {
          this.timer = setTimeout(() => {
            var tmpNoDispatchList = [];
            this.noDispatchList.forEach(item => {
              if (item.certificationName.indexOf(val) != -1) {
                tmpNoDispatchList.push(item);
              }
            });
            this.filterNoDispatchList = tmpNoDispatchList;
            var tmpWriteList = [];
            this.writeList.forEach(item => {
              if (item.certificationName.indexOf(val) != -1) {
                tmpWriteList.push(item);
              }
            });
            this.filterWriteList = tmpWriteList;
            var tmpFinishList = [];
            this.finishList.forEach(item => {
              if (item.certificationName.indexOf(val) != -1) {
                tmpFinishList.push(item);
              }
            });
            this.filterFinishList = tmpFinishList;
          }, 100)
        } else {
          this.getList();
        }
      }
    },
    methods: {
      getUser() {
        getUserProfile().then(response => {
          this.user = response.data;
        });
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },

      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        //全部全部文件
        getAllFileList().then(response => {
          var allFiles = [];
          response.data.standardFileList.forEach(item => {
              allFiles.push({
                key:item.id,
                label:item.fileName
              })
            }
          )
          this.allFiles = allFiles;
        });

        //获取车型
        getAutoCascader().then(response => {
            debugger
            if (200 == response.code) {
              this.autoTypeOptions = response.data;
            } else {
              this.$message.error(response.msg);
            }
          }
        );
        getOne(row.id).then(response => {
          if (200 == response.code) {
            this.assignFormValue(response.data);
            this.open = true;
            this.title = "修改认证";
          } else {
            this.$message.error(response.msg);
          }
        });
      },

      assignFormValue(data) {
        if(data.standardFileIds) {
          this.selFiles = data.standardFileIds;
        }
        this.form.id = data.certification.id;
        let autoTypeValue = [];
        autoTypeValue.push(data.certification.certificationAutoType);
        autoTypeValue.push(data.certification.certificationAutoSpecies);
        autoTypeValue.push(data.certification.certificationAutoSeries);
        this.form.autoTypeValue = autoTypeValue;
        let countryValue = [];
        countryValue.push(data.certification.exportContinent);
        countryValue.push(data.certification.exportCountry);
        this.form.countryValue = countryValue;
        this.form.certificationCategory = data.certification.certificationCategory;
      },

      handleDelete(item) {
        this.$confirm('确认删除车型"' + item.certificationName + '"的认证吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return deleteCertification(item.id);
        }).then(reponse => {
          if(reponse.data.success) {
            this.getList(this.keyWord);
            this.msgSuccess("删除成功");
          }else {
            this.msgError("删除失败");
          }
        }).catch(function () {
        });
      },

      handleDispatch(item) {
        this.$confirm('是否分发车型"' + item.certificationName + '"的认证，进行填写?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return certificationDispatch(item.id);
        }).then(reponse => {
          this.getList(this.keyWord);
          this.msgSuccess("分发成功");
        }).catch(function () {
        });
      },
      getList(keyWord) {
        this.noDispatchList=[];
        this.writeList= [];
        this.finishList= [];
        this.filterNoDispatchList= [];
        this.filterWriteList= [];
        this.filterFinishList= [];
        getCertificationList(keyWord).then(response => {
            if (200 == response.code) {
              this.noDispatchList = response.data.noDispatchList;
              this.filterNoDispatchList = response.data.noDispatchList;
              this.writeList = response.data.writeList;
              this.filterWriteList = response.data.writeList;
              this.finishList = response.data.finishList;
              this.filterFinishList = response.data.finishList;
            } else {
              this.$message.error(response.msg);
            }
            this.loading.close();
          }
        ).catch(function () {
          this.loading.close();
        });
      },

      submitForm() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if(this.selFiles.length==0) {
              this.$message.error("请选择文件！");
            }else {
              this.form.createEmployeeName = this.user.userName;
              this.form.createEmployeeNumber = this.user.userId;
              this.form.certificationAutoType = this.form.autoTypeValue[0];
              this.form.certificationAutoSpecies = this.form.autoTypeValue[1];
              this.form.certificationAutoSeries = this.form.autoTypeValue[2];
              this.form.exportContinent = this.form.countryValue[0];
              this.form.exportCountry = this.form.countryValue[1];
              delete this.form['autoTypeValue'];
              delete this.form['countryValue'];
              let params = {};
              params.certification = this.form;
              params.standardFileId = this.selFiles;
              addOrUpdate(params).then(response => {
                if (200 == response.code) {
                  this.cancel();
                  this.msgSuccess("保存成功");
                  this.getList(this.keyWord);
                } else {
                  this.$message.error(response.msg);
                }
              });
            }
          }
        })
      },

      handleNodeClick(data) {
        debugger
        if(data.menuType=='menu') {
          var tmpNoDispatchList = [];
          this.noDispatchList.forEach(item => {
            if (item.certificationAutoSpecies.indexOf(data.label) != -1) {
              tmpNoDispatchList.push(item);
            }
          });
          this.filterNoDispatchList = tmpNoDispatchList;
          var tmpWriteList = [];
          this.writeList.forEach(item => {
            if (item.certificationAutoSpecies.indexOf(data.label) != -1) {
              tmpWriteList.push(item);
            }
          });
          this.filterWriteList = tmpWriteList;
          var tmpFinishList = [];
          this.finishList.forEach(item => {
            if (item.certificationAutoSpecies.indexOf(data.label) != -1) {
              tmpFinishList.push(item);
            }
          });
          this.filterFinishList = tmpFinishList;
        }
      },

      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "创建认证";

        //全部全部文件
        getAllFileList().then(response => {
          var allFiles = [];
          response.data.standardFileList.forEach(item => {
              allFiles.push({
                key:item.id,
                label:item.fileName
              })
            }
          )
          this.allFiles = allFiles;
        });

        //获取车型
        getAutoCascader().then(response => {
            debugger
            if (200 == response.code) {
              this.autoTypeOptions = response.data;
            } else {
              this.$message.error(response.msg);
            }
          }
        );
      },
      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },

      renderFunc(h, option) {
        return <span title={option.label}>{option.label}</span>
      },

      reset() {
        this.form = {
          certificationCategory: '',
          autoTypeValue:[],
          countryValue:[]
        }
        this.selFiles = [];
        this.resetForm("form");
      },
      // 打开加载层
      openLoading() {
        this.loading = this.$loading({
          lock: true,
          text: "拼命读取中",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
      },
    }
  }
</script>

<style>

  .inputTransfer .el-transfer-panel{
    width: 40%;
    height: 450px;
  }
  .inputTransfer .el-transfer-panel__list.is-filterable{
    height: 350px;
  }

  .el-dialog.is-fullscreen {
    margin-top: 0vh !important;
  }

  .row-space {
    margin-bottom: 15px;
    font-size:16px
  }

</style>
