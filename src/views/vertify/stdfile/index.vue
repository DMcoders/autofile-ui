<template>
  <div class="app-container">
    <el-row type="flex" justify="center">
      <el-col :span="12">
      <h2 class="text-center">认证文件搜索</h2>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="12" class="text-center">
          <el-input
            v-model="keyWord"
            placeholder="快速搜索"
            clearable
            size="medium"
            style="width: 500px"
            prefix-icon="el-icon-search"
            @keyup.enter.native="handleQuery"
          />
      </el-col>
    </el-row>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
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
          <el-row type="flex" justify="end">
            <el-col :span="5" class="text-right">
              <i class="el-icon-edit" style="color:green" @click="handleUpdate(item)"></i>&nbsp&nbsp
              <i class="el-icon-delete" style="color:red" @click="handleDelete(item)"></i>
            </el-col>
          </el-row>
          <div @click=""><span>{{(index+1)+"、"+item.fileName}}</span></div>
          <div class="el-table el-table--enable-row-hover el-table--medium">
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="60%" @close="cancel" append-to-body>
      <el-row type="flex" justify="center">
        <el-col :span="24">
          <el-transfer
             class="inputTransfer"
             v-model="selStandardInputs"
             :data="allStandardInputs"
              filterable
             :titles="['所有', '已选']"
          ></el-transfer>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {selectAllRoles} from "@/api/system/role";

  import {list,deleteFile} from "@/api/vertify/standardFiles";

  import {list as standardInputList} from "@/api/vertify/standardInput";

  export default {
    name: "stdFile",

    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
          });
        }
        return data;
      };
      return {
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
        allStandardInputs: [],
        selStandardInputs: [],
        standardInputParams: {
          pageNum: 1,
          pageSize: 10
        }
      };
    },
    created() {
      this.getList(this.keyWord);
      this.openLoading();

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

      },

      // 取消按钮
      cancel() {
        this.open = false;
        this.selStandardInputs = [];
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
      handleUpdate() {
        this.open = true;
        this.title = "修改";
        // getOne(id).then(response => {
        //   if (200 == response.code) {
        //     this.assignFormValue(response.data);
        //
        //   } else {
        //     this.$message.error(response.msg);
        //   }
        // });
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
    width: 300px;
    height: 450px;
  }
  .inputTransfer .el-transfer-panel__list.is-filterable{
    height: 350px;
  }
</style>
