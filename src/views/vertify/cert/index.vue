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
        <el-tree :data="productMenu" :props="productMenu" @node-click="handleNodeClick" defaultExpandAll></el-tree>
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
              <el-col :span="12" class="card-box" v-for="(item,index) in filters">
                <el-card>
                  <div>
                    <img :src="item.autoImage" :onerror="defaultImg" class="image" height="200" width="200">

                    <div class="text item">
                      使用车型：{{item.autoType}}
                    </div>
                    <div class="text item">
                      版本年份：{{item.versionYear}}
                    </div>
                    <div class="text item">
                      创建日期：{{item.gmtCreate}}
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-tab-pane>
            <el-tab-pane label="填写中" name="write">
              填写中
            </el-tab-pane>
            <el-tab-pane label="已完成" name="finish">
              已完成
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
  import {addOrUpdate} from "@/api/vertify/certification";


  export default {
    name: "cert",

    computed: {
      defaultImg() {
        return 'this.src="' + require('../../../assets/image/profile.jpg') + '"';
      }
    },

    created() {
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
        filters: [
          {
          "name":"QQ",
          },
          {
            "name":"瑞虎"
          },
          {
            "name":"瑞虎"
          }
        ],
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
            //此处为接口函数
            // var tmpList = [];
            // for(var i=0;i<this.allFiles.length;i++) {
            //   if(this.allFiles[i].fileName.indexOf(val)!=-1) {
            //     tmpList.push(this.allFiles[i]);
            //   }
            // }
            // this.filterFiles = tmpList;
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
        let id = row.id;
        getOne(id).then(response => {
          if (200 == response.code) {
            debugger
            this.assignFormValue(response.data);
            this.open = true;
            this.title = "修改";
          } else {
            this.$message.error(response.msg);
          }
        });
      },

      assignFormValue(data) {
        this.form.id = data.id;
      },

      handleDelete(item) {
        this.$confirm('确认删除车型"' + item.autoName + '"吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          debugger
          return deleteSingle(item.id);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },


      getList() {
        debugger
        list(this.queryParams).then(response => {
            if (200 == response.code) {
              this.total = response.data.total;
              this.list = response.data.list;
            } else {
              this.$message.error(response.msg);
            }
          }
        );
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
                } else {
                  this.$message.error(response.msg);
                }
              });
            }
          }
        })
      },

      handleNodeClick(data) {
        console.log(data);

      },

      changeQueryParam() {
        console.log(this.radioArray);
        debugger
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
        this.resetForm("form");
      }
    }
  }
</script>

<style>

  .text {
    font-size: 3px;
  }

  .item {
    margin-bottom: 4px;
  }

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


</style>
