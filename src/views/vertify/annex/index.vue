<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="附录名称" prop="annexName">
        <el-input
          v-model="queryParams.annexName"
          placeholder="请输入附录名称"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="组合顺序" prop="annexOrder">
        <el-select style="width:100%" clearable v-model="queryParams.annexOrder" size="small" clearable
                   placeholder="请选择顺序">
          <el-option
            v-for="annexOrder in annexOrders"
            :key="annexOrder"
            :label="annexOrder"
            :value="annexOrder"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="附录标题" prop="annexTitle">
        <el-input
          v-model="queryParams.annexTitle"
          placeholder="请输入附录标题"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:dict:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:dict:remove']"
        >删除</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="annexList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="附录名称" align="center" prop="annexName" />
      <el-table-column label="附录组合顺序" align="center" prop="annexOrder" :show-overflow-tooltip="true" />
      <el-table-column label="标题" align="center" prop="annexTitle"/>
      <el-table-column label="页数" align="center" prop="annexPage" :show-overflow-tooltip="true" />
      <el-table-column label="填写角色" align="center" prop="role" :show-overflow-tooltip="true" />
      <el-table-column label="填写类别" align="center" prop="inputType" :show-overflow-tooltip="true" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dict:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dict:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="附录名称" prop="annexName">
              <el-input style="width:100%" v-model="form.annexName" clearable placeholder="附录名称"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="组合顺序" prop="annexOrder">
              <el-select style="width:100%" clearable v-model="form.annexOrder" size="small" clearable
                         placeholder="请选择顺序">
                <el-option
                  v-for="annexOrder in annexOrders"
                  :key="annexOrder"
                  :label="annexOrder"
                  :value="annexOrder"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12">
            <el-form-item label="附录标题" prop="annexTitle">
              <el-input style="width:100%" v-model="form.annexTitle" clearable placeholder="请输入附录标题"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附录页数" prop="annexPage">
              <el-input-number style="width:100%" v-model="form.annexPage" controls-position="right" :min="1"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="模块" prop="moduleName">
              <el-select style="width:100%" clearable v-model="form.moduleName" size="small" clearable
                         placeholder="请选择模块">
                <el-option
                  v-for="moduleName in moduleNames"
                  :key="moduleName"
                  :label="moduleName"
                  :value="moduleName"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="选择角色" prop="role">
              <el-select style="width:100%" clearable v-model="form.role" size="small" clearable placeholder="请选择角色">
                <el-option
                  v-for="role in roles"
                  :key="role.roleId"
                  :label="role.roleName"
                  :value="role.roleId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="类型" prop="inputType">
              <el-select style="width:100%" clearable v-model="form.inputType" size="small" clearable
                         placeholder="请选择类型">
                <el-option
                  v-for="inputType in inputTypes"
                  :key="inputType.key"
                  :label="inputType.value"
                  :value="inputType.key"
                />
              </el-select>
            </el-form-item>
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
  import {selectAllRoles} from "@/api/system/role";

  import {add,update,getOne,list,deleteBatch} from "@/api/vertify/standardAnnex";

  export default {
    name: "annex",
    data() {
      return {
        // 遮罩层
        loading: false,
        // 选中数组
        ids: [],
        // 非单个禁用
        single: true,
        // 非多个禁用
        multiple: true,
        // 总条数
        total: 0,
        // 字典表格数据
        typeList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 状态数据字典
        statusOptions: [],

        // 参数表格数据
        annexList: [],
        // 日期范围
        dateRange: [],
        roles: [],
        moduleNames: [
          "制动", "安全带", "操纵件", "侧防护", "车身总布置", "挡泥板", "导流罩", "电磁兼容", "风窗", "后防护", "后牌照板", "后视镜", "空调(乘员舱加热系统)", "铭牌VIN", "前防护", "座椅", "车轮", "悬架", "转向", "发动机", "供油", "进气", "排气", "传动系", "车桥", "底盘", "总布置"
        ],
        annexOrders:["A","B","C","D"],
        inputTypes: [{"key": "title", "value": "标题"}, {"key": "input", "value": "输入框"}, {
          "key": "image",
          "value": "图片"
        }],
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          annexName: undefined,
          annexOrder: undefined,
          annexTitle: undefined
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
          // dictName: [
          //   { required: true, message: "字典名称不能为空", trigger: "blur" }
          // ],
          // dictType: [
          //   { required: true, message: "字典类型不能为空", trigger: "blur" }
          // ]
        }
      };
    },
    created() {
      selectAllRoles().then(response => {
        if (response.code == 200) {
          this.assignRoleValue(response.data);
        } else this.$message.error(response.data.msg);
      });
    },
    methods: {
      assignRoleValue(list) {
        for (let i = 0; i < list.length; i++) {
          let item = {};
          item.roleName = list[i].roleName;
          item.roleKey = list[i].roleKey;
          item.roleId = list[i].roleId;
          this.roles.push(item);
        }
      },

      /** 查询字典类型列表 */
      getList() {
        list(this.queryParams).then(response => {
            debugger
            this.loading = false;
          if (200 == response.code) {
            this.total = response.data.total;
            this.dealQueryInfo(response.data.list);
          } else {
            this.$message.error(response.msg);
          }
          }
        );
      },

      dealQueryInfo(list) {
        this.annexList = [];
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          let obj = {};
          obj.id = item.id;
          obj.annexName = item.annexName;
          this.inputTypes.forEach(it => {
            if (item.inputType == it.key) {
              obj.inputType = it.value;
              return;
            }
          });
          obj.annexOrder = item.annexOrder;
          obj.annexTitle = item.annexTitle;
          this.roles.forEach((it) => {
            if (item.role == it.roleId) {
              obj.role = it.roleName;
              return;
            }
          });
          obj.moduleName = item.moduleName;
          obj.annexPage = item.annexPage;
          this.annexList.push(obj);
        }
      },

      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          annexName: undefined,
          annexOrder: undefined,
          annexTitle: undefined,
          annexPage: undefined,
          moduleName: undefined,
          role:undefined,
          inputType:undefined,
        };
        this.resetForm("form");
      },
      /** 搜索按钮操作 */
      handleQuery() {
        this.queryParams.pageNum = 1;
        this.getList();
      },
      /** 重置按钮操作 */
      resetQuery() {
        this.dateRange = [];
        this.resetForm("queryForm");
        this.handleQuery();
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加";
      },
      // 多选框选中数据
      handleSelectionChange(selection) {
        this.ids = selection.map(item => item.dictId)
        this.single = selection.length!=1
        this.multiple = !selection.length
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        let id = row.id;
        getOne(id).then(response => {
          if (200 == response.code) {
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
        this.form.annexName = data.annexName;
        this.form.annexOrder = data.annexOrder;
        this.form.annexTitle = data.annexTitle;
        this.roles.forEach((it) => {
          if (data.role == it.roleId) {
            this.$set(this.form, "role", it.roleId);
            return;
          }
        });
        this.form.moduleName = data.moduleName;
        this.inputTypes.forEach((it) => {
          if (data.inputType == it.key) {
            this.$set(this.form, "inputType", it.key);
            return;
          }
        });
        this.form.annexPage = data.annexPage;
      },
      /** 提交按钮 */
      submitForm: function() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != undefined) {
              debugger
              update(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            } else {
              debugger
              let requestParam = [];
              requestParam.push(this.form);
              let standardAnnexListJson = JSON.stringify(requestParam);
              add(standardAnnexListJson).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("新增成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            }
          }
        });
      },
      /** 删除按钮操作 */
      handleDelete(row) {
        debugger
        let tempId;
        if (undefined != row.id) {
          tempId = [];
          tempId[0] = row.id;
        }
        let id = tempId || this.ids
        this.$confirm('是否确认删除编号为"' + id + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return deleteBatch(id);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有类型数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportType(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
      }
    }
  };
</script>
