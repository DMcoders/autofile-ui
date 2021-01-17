<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-col :span="12">
      <h1 class="text-center" style="font-size:40px;margin: 20px 0;">认证文件搜索</h1>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="margin: 40px 0 80px 20px;">
      <el-col :span="12" class="text-center">
          <el-input
            id="keyWordInput"
            v-model="keyWord"
            style="width: 600px;"
            placeholder="快速搜索"
            clearable
            size="medium"
            prefix-icon="el-icon-search"
            @keyup.enter.native="handleQuery"
          />
      </el-col>
      <el-col :span="2">
        <el-button
          style="height:42px"
          type="primary"
          icon="el-icon-plus"
          size="medium"
          @click="handleAdd"
          v-hasPermi="['system:config:add']"
        >新增
        </el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6" class="card-box" v-for="(item,index) in filterFiles">
        <el-card>
          <div slot="header" class="clearfix">
            <span style="font-weight: bold;">{{item.fileName}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              <i class="el-icon-edit" style="color:green" @click="handleUpdate(item)"></i>&nbsp
              <i class="el-icon-delete" style="color:red" @click="handleDelete(item)"></i>
            </el-button>
          </div>
          <div @click="detail(item)" id="fileDetailLabel">
            <div class="text item">
              认证类别：{{item.category}}
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
    </el-row>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="90%" @close="cancel" append-to-body fullscreen>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="文件名" prop="fileName">
              <el-input style="width:80%" v-model="form.fileName" clearable placeholder="请输入文件名"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
              <el-form-item label="版本年号" prop="versionYear">
                <el-date-picker
                  style="width:80%"
                  v-model="form.versionYear"
                  type="year"
                  format="yyyy"
                  value-format="yyyy"
                  placeholder="选择版本年号"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="认证类别" prop="category">
              <el-select style="width:80%" v-model="form.category" placeholder="请选择认证类别">
                <el-option
                  v-for="item in categoryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="16">
            <el-form-item label="首页标题" prop="coverTitle">
              <el-input style="width:91%" v-model="form.coverTitle" clearable placeholder="请输入首页标题"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="首页车型" prop="vehicleType">
              <el-input style="width:80%" v-model="form.vehicleType" clearable placeholder="请输入首页车型"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item label="首页副题" prop="coverSubTitle">
              <el-input type="textarea" style="width:94%" v-model="form.coverSubTitle" clearable placeholder="请输入首页副标题"/>
            </el-form-item>
          </el-col>

        </el-row>

        <el-row>
          <el-col :span="24">
              <el-transfer
                 class="inputTransfer"
                 v-model="selStandardInputs"
                 :data="allStandardInputs"
                  filterable
                 :titles="['所有组件', '已选组件']"
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

    <el-dialog :title="detailTitle" :visible.sync="openDetail" width="80%" append-to-body fullscreen>
      <el-container class="text-center">
        <el-header><h1>{{detailPage.coverTitle}}</h1></el-header>
        <el-main><h2>{{detailPage.coverSubTitle}}</h2></el-main>
        <el-footer><h3>Vehicle Type: {{detailPage.vehicleType}}</h3></el-footer>
      </el-container>

      <el-table
        :data="textTableData"
        style="width: 100%"
        :span-method="arraySpanMethod"
        empty-text = "没有正文信息"
        :show-header=false>
        <el-table-column
          prop="orderName"
          min-width="1">
          <template slot-scope="scope">
            <span v-if="scope.row.inputType==='title'" style="font-weight: bold">{{scope.row.orderName}}</span>
            <span v-else style="font-weight: normal">{{scope.row.orderName}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          min-width="5">
          <template slot-scope="scope">
            <span v-if="scope.row.inputType==='title'" style="font-weight: bold">{{scope.row.title}}</span>
            <span v-else style="font-weight: normal">{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="inputType"
          min-width="1">
          <template slot-scope="scope">
            {{scope.row.inputType==="input"?"：":""}}
          </template>
        </el-table-column>
        <el-table-column
          prop="inputType"
          min-width="1">
          <template slot-scope="scope">
            <el-input v-if="scope.row.inputType==='input'"
            :disabled="true">
          </el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="annex"
          min-width="1">
          <template slot-scope="scope">
            {{scope.row.annex===undefined?"":"See annex"+scope.row.annex}}
          </template>
        </el-table-column>
        <el-table-column
          prop="role"
          min-width="2"
          align="center">
          <template slot-scope="scope">
            <el-tag
              type="warning"
              disable-transitions>{{scope.row.role}}</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <div style="margin-top:24px"></div>
      <div v-for="(item, i) in annexListData">
        <el-row style="font-size:18px">
          <el-col :span="3">
            {{item.orderName}}
          </el-col>
          <el-col :span="17">
            <el-row>
              <el-col :span="4" style="border:1px solid;border-color:black">
                Type:
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black">
                {{item.type}}
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black" align="middle">
                Annex {{item.annex}} Page {{item.annexPage}}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="border-right:1px solid;border-left:1px solid;border-bottom:1px solid;border-color:black">
                Title:
              </el-col>
              <el-col :span="20" style="border-right:1px solid;border-bottom:1px solid;border-color:black">
                {{item.title}}
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4" type="flex" align="middle">
            <el-tag
              type="warning"
              disable-transitions>{{item.role}}</el-tag>
          </el-col>
        </el-row>

        <el-divider></el-divider>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {list,deleteFile,addOrUpdate,get,getAllStandardInput,getDetailFile} from "@/api/vertify/standardFiles";
  import {getAutoCascader} from "@/api/vertify/autoManage";

  import { getUserProfile } from "@/api/system/user";

  export default {
    name: "stdFile",

    data() {
      return {
        user: {},
        // 查询参数
        keyWord: "",
        timer:null,
        // 加载层信息
        loading: [],
        // 文件信息
        allfiles: [],
        // 搜索文件信息
        filterFiles: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 是否显示详情弹出层
        openDetail: false,
        detailTitle:"",
        // 标准组件穿梭框
        selStandardInputs: [],
        allStandardInputs: [],
        standardInputParams: {
          pageNum: 1,
          pageSize: 10
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e6;
          }
        },
        // 表单参数
        form: {
          fileName:"",
          versionYear:"",
          coverTitle:"",
          coverSubTitle:"",
          vehicleType:"",
          category:""
        },
        //详情页内容
        detailPage: {
          coverTitle:"",
          coverSubTitle:"",
          vehicleType:""
        },
        // 表单校验
        rules: {
          fileName: [
            {required: true, message: "文件名不能为空", trigger: "blur"},
          ],
          versionYear: [
            {required: true, message: "版本年份不能为空", trigger: "blur"}
          ],
          category: [
            {required: true, message: "认证类别不能为空", trigger: "blur"}
          ],
          coverTitle: [
            {required: true, message: "首页标题不能为空", trigger: "blur"}
          ],
          coverSubTitle: [
            {required: true, message: "首页副标题不能为空", trigger: "blur"}
          ],
          vehicleType: [
            {required: true, message: "首页车型不能为空", trigger: "blur"}
          ]
        },
        autoTypeOptions: [],
        //正文全部组件
        textTableData:[],
        //附录全部组件
        annexListData:[],
        categoryOptions: [{
          value: 'ECE',
          label: 'ECE'
        }, {
          value: 'GCC',
          label: 'GCC'
        }, {
          value: 'DOT',
          label: 'DOT'
        }, {
          value: 'GHOST',
          label: 'GHOST'
        }, {
          value: 'CCC',
          label: 'CCC'
        }, {
          value: '专属',
          label: '专属'
        }]
      };
    },
    created() {
      this.getList(this.keyWord);
      this.openLoading();
      this.getUser();

      getAllStandardInput().then(response => {
        var allStandardInputs = [];
        for(var key in response.data) {
            allStandardInputs.push({
              key:key,
              label:response.data[key]
            })
        }
        this.allStandardInputs = allStandardInputs;
      });
    },
    watch: {
      keyWord:function (val) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (val && val.length > 0) {
          this.timer = setTimeout(() => {
            //此处为接口函数
            var tmpList = [];
            for(var i=0;i<this.allFiles.length;i++) {
              if(this.allFiles[i].fileName.indexOf(val)!=-1) {
                tmpList.push(this.allFiles[i]);
              }
            }
            this.filterFiles = tmpList;
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

      /** 查询服务器信息 */
      getList(keyWord) {
        list(keyWord).then(response => {
          this.filterFiles = response.data.standardFileList;
          this.allFiles = response.data.standardFileList;
          this.loading.close();
        });
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

      submitForm() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if(this.selStandardInputs.length==0) {
              this.$message.error("请选择组件！");
            }else {
              this.form.employeeName = this.user.userName;
              this.form.employeeNumber = this.user.userId;
              let params = {};
              params.standardFile = this.form;
              params.inputIdList = this.selStandardInputs;
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

      // 取消按钮
      cancel() {
        this.open = false;
        this.selStandardInputs = [];
        this.form = {
          fileName:"",
          versionYear:"",
          category:"",
          coverTitle:"",
          coverSubTitle:"",
          vehicleType:""
        };
        this.resetForm("form");
      },

      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.open = true;
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
        this.title = "新增";
      },

      /** 修改按钮操作 */
      handleUpdate(item) {
        this.open = true;
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
        this.title = "修改";
        get(item.id).then(response => {
          if (200 == response.code) {
            this.assignFormValue(response.data);
          } else {
            this.$message.error(response.msg);
          }
        });
      },
      assignFormValue(data) {
        this.form.fileName = data.standardFile.fileName;
        this.form.versionYear = data.standardFile.versionYear;
        this.form.category = data.standardFile.category;
        this.form.id = data.standardFile.id;
        this.form.coverTitle = data.standardFile.coverTitle;
        this.form.coverSubTitle = data.standardFile.coverSubTitle;
        this.form.vehicleType = data.standardFile.vehicleType;
        if(data.standardInputList) {
          this.selStandardInputs = data.standardInputList;
        }
      },
      /** 删除按钮操作 */
      handleDelete(item) {
        this.$confirm('确认删除文件"' + item.fileName + '"吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return deleteFile(item.id);
        }).then(() => {
          this.getList(this.keyWord);
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },
      /**
       * 文件详情信息
       * @param item
       */
      detail(item) {
        this.openDetail = true;
        this.detailTitle = item.fileName;
        getDetailFile(item.id).then(response => {
          if (200 == response.code) {
            console.log(response.data)
            var standardFile = response.data.standardFile;
            this.detailPage.coverTitle = standardFile.coverTitle;
            this.detailPage.coverSubTitle = standardFile.coverSubTitle;
            this.detailPage.vehicleType = standardFile.vehicleType;
            this.textTableData = response.data.fileTextComponents;
            this.annexListData = response.data.fileAnnexComponents;
          } else {
            this.$message.error(response.msg);
          }
        });
      },
      renderFunc(h, option) {
        return <span title={option.label}>{option.label}</span>
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        console.log(row)
        if (row.inputType === "title") {
          if (columnIndex === 1) {
            return [1, 4];
          } else if (columnIndex === 2) {
            return [0, 0];
          } else if (columnIndex === 3) {
            return [0, 0];
          } else if (columnIndex === 4) {
            return [0, 0];
          }
        }
      }
    }
  };
</script>

<style lang="scss">
  .el-icon-edit,.el-icon-delete,#fileDetailLabel:hover {
    cursor: pointer;
  }

  .inputTransfer .el-transfer-panel{
    width: 42%;
    height: 450px;
  }
  .inputTransfer .el-transfer-panel__list.is-filterable{
    height: 350px;
  }
  #keyWordInput.el-input__inner {
    height: 44px;
    line-height: 44px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .el-dialog.is-fullscreen {
    margin-top: 0vh !important;
  }

  .el-table__body tr:hover > td{
    background-color:white !important;
  }
</style>
