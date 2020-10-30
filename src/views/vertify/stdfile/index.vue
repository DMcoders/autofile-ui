<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-col :span="12">
      <h1 class="text-center" style="font-size:40px;margin: 20px 0;">认证文件搜索</h1>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12" class="text-center">
          <el-input
            id="keyWordInput"
            v-model="keyWord"
            placeholder="快速搜索"
            clearable
            size="medium"
            style="width: 600px;"
            prefix-icon="el-icon-search"
            @keyup.enter.native="handleQuery"
          />
      </el-col>
    </el-row>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5" :offset="22">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
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
          <div class="text item">
            使用车型：{{item.autoType}}
          </div>
          <div class="text item">
            版本年份：{{item.versionYear}}
          </div>
          <div class="text item">
            创建日期：{{item.gmtCreate}}
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="65%" @close="cancel" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="文件名" prop="fileName">
              <el-input style="width:80%" v-model="form.fileName" clearable placeholder="请输入文件名"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
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
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业" prop="company">
              <el-input style="width:80%" v-model="form.company" clearable placeholder="请输入企业名"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="认证类别" prop="category">
              <el-input style="width:80%" v-model="form.category" clearable placeholder="请输入认证类别"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="车型" prop="autoTypeValue">
              <el-cascader style="width:80%"
                ref="autoTypeCascader"
                v-model="form.autoTypeValue"
                :options="autoTypeOptions"
                :props="{ expandTrigger: 'hover' }"
                clearable
                filterable
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="12">
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="22" :offset="2">
              <el-transfer
                 class="inputTransfer"
                 v-model="selStandardInputs"
                 :data="allStandardInputs"
                  filterable
                 :titles="['所有组件', '已选组件']"
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
  import {list,deleteFile,addOrUpdate,get} from "@/api/vertify/standardFiles";
  import {list as standardInputList} from "@/api/vertify/standardInput";
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
          company:"",
          category:"",
          autoTypeValue: []
        },
        // 表单校验
        rules: {
          fileName: [
            {required: true, message: "文件名不能为空", trigger: "blur"},
          ],
          versionYear: [
            {required: true, message: "版本年份不能为空", trigger: "blur"}
          ],
          company: [
            {required: true, message: "企业不能为空", trigger: "blur"}
          ],
          category: [
            {required: true, message: "认证类别不能为空", trigger: "blur"}
          ],
          autoTypeValue: [
            {required: true, message: "车型不能为空", trigger: "change"}
          ]
        },
        autoTypeOptions: [{
          value: 'A级车',
          label: 'A级车',
          children: [{
            value: '奇瑞',
            label: '奇瑞',
            children: [{
              value: '艾瑞泽',
              label: '艾瑞泽'
            }, {
              value: '瑞虎',
              label: '瑞虎'
            }]
          }, {
            value: '大众',
            label: '大众',
            children: [{
              value: '宝来',
              label: '宝来'
            }, {
              value: '朗逸',
              label: '朗逸'
            }]
          }]
        }, {
          value: 'B级车',
          label: 'B级车',
          children: [{
            value: '大众',
            label: '大众',
            children: [{
              value: '速腾',
              label: '速腾'
            }, {
              value: '凌度',
              label: '凌度'
            }, {
              value: '帕萨特',
              label: '帕萨特'
            }]
          }]
        }]
      };
    },
    created() {
      this.getList(this.keyWord);
      this.openLoading();
      this.getUser();

      standardInputList({pageNum:0,pageSize:0}).then(response => {
        var allStandardInputs = [];
        response.data.list.forEach((item, index) => {
          allStandardInputs.push({
            key:item.id,
            label:item.sectionOrderName+" "+item.sectionTitleZh
          })
        })
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
              this.form.autoType = this.form.autoTypeValue[0];
              this.form.autoSpecies = this.form.autoTypeValue[1];
              this.form.autoSeries = this.form.autoTypeValue[2];
              delete this.form['autoTypeValue'];
              let params = {};
              params.standardFile = this.form;
              params.inputIdList = this.selStandardInputs;
              addOrUpdate(params).then(response => {
                if (200 == response.code) {
                  this.cancel();
                  this.msgSuccess("新增成功");
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
          company:"",
          category:"",
          autoTypeValue: []
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
        this.title = "新增";
      },

      /** 修改按钮操作 */
      handleUpdate(item) {
        this.open = true;
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
        this.form.company = data.standardFile.company;
        this.form.category = data.standardFile.category;
        this.form.id = data.standardFile.id;
        this.form.company = data.standardFile.company;
        let autoTypeValue = [];
        autoTypeValue.push(data.standardFile.autoType);
        autoTypeValue.push(data.standardFile.autoSpecies);
        autoTypeValue.push(data.standardFile.autoSeries);
        this.form.autoTypeValue = autoTypeValue;
        let selStandardInputs = [];
        data.standardInputList.forEach((item, index) => {
          selStandardInputs.push(item.id)
        })
        this.selStandardInputs = selStandardInputs;
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
      }
    }
  };
</script>

<style lang="scss">
  .el-icon-edit,.el-icon-delete:hover {
    cursor: pointer;
  }

  .inputTransfer .el-transfer-panel{
    width: 280px;
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

</style>
