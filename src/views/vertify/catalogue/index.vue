<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="目录序号" prop="sectionOrderName">
        <el-input
          v-model="queryParams.sectionOrderName"
          placeholder="请输入目录序号"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="章节" prop="firstOrder">
        <el-input
          v-model="queryParams.firstOrder"
          placeholder="请输入章节"
          clearable
          size="small"
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="模块" prop="moduleName">
        <el-select v-model="queryParams.moduleName" placeholder="模块" clearable size="small">
          <el-option
            v-for="moduleName in moduleNames"
            :key="moduleName"
            :label="moduleName"
            :value="moduleName"
          />
        </el-select>
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
          v-hasPermi="['system:config:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:config:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:config:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="configList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="目录序号" align="center" prop="sectionOrderName" />
      <el-table-column label="章节" align="center" prop="firstOrder" :show-overflow-tooltip="true" />
      <el-table-column label="标题" align="center" prop="sectionTitle" :show-overflow-tooltip="true" />
      <el-table-column label="中文标题" align="center" prop="sectionTitleZh" />
      <el-table-column label="填写角色" align="center" prop="roleName"/>
      <el-table-column label="模块" align="center" prop="moduleName" :show-overflow-tooltip="true" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:config:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:config:remove']"
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
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="目录序号" prop="sectionOrderName">
          <el-input v-model="form.sectionOrderName" placeholder="请输入目录序号" />
        </el-form-item>
        <el-form-item label="章节" prop="firstOrder">
          <el-input v-model="form.firstOrder" disabled/>
        </el-form-item>
        <el-form-item label="模块" prop="moduleName">
          <el-select v-model="form.moduleName" size="small" clearable placeholder="请选择模块">
            <el-option
              v-for="moduleName in moduleNames"
              :key="moduleName"
              :label="moduleName"
              :value="moduleName"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择角色" prop="roleName">
          <el-select v-model="form.roleId" size="small" clearable placeholder="请选择角色">
            <el-option
              v-for="role in roles"
              :key="role.roleId"
              :label="role.roleName"
              :value="role.roleId"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="关联附录" prop="remark">
          <el-switch on-value="1" off-value="0" v-model="form.relateAnnex"></el-switch>
        </el-form-item>
        <el-form-item label="附录页数" prop="annexPage">
          <el-input-number v-model="form.annexPage" controls-position="right" :min="0" />
        </el-form-item>
       <el-form-item label="div预览" prop="divPreview">
         <component v-bind:is="whichCatalogue"></component>
       </el-form-item>
      </el-form>
      <component v-bind:is="whichCatalogue"></component>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subPreview">预览</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  import { selectAllRoles } from "@/api/system/role";

  import catalogue_0 from '../../../components/Vertify/Catalogue/0/catalogue_0'
  import catalogue_01 from '../../../components/Vertify/Catalogue/0/catalogue_01'

  export default {
    name: "cate",

    components: {
      catalogue_0,
      catalogue_01
    },
    props:{
      tnom:{
        type:String
      }
    },

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
        // 参数表格数据
        catalogueList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        //
        moduleNames: [
          "制动","安全带","操纵件","侧防护","车身总布置","挡泥板","导流罩","电磁兼容","风窗","后防护","后牌照板","后视镜","空调(乘员舱加热系统)","铭牌VIN","前防护","座椅","车轮","悬架","转向","发动机","供油","进气","排气","传动系","车桥","底盘","总布置"
        ],
        whichCatalogue:undefined,
        roles:[],
        // 日期范围
        dateRange: [],
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          firstOrder: undefined,
          moduleName:undefined,
          sectionOrderName:undefined,
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
          configName: [
            { required: true, message: "参数名称不能为空", trigger: "blur" }
          ],
          configKey: [
            { required: true, message: "参数键名不能为空", trigger: "blur" }
          ],
          configValue: [
            { required: true, message: "参数键值不能为空", trigger: "blur" }
          ]
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


      /** 查询参数列表 */
      getList() {
        listConfig(this.addDateRange(this.queryParams, this.dateRange)).then(response => {
            this.configList = response.rows;
            this.total = response.total;
            this.loading = false;
          }
        );
      },
      // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          configId: undefined,
          configName: undefined,
          configKey: undefined,
          configValue: undefined,
          configType: "Y",
          remark: undefined
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
        this.title = "添加目录";
      },
      // 多选框选中数据
      handleSelectionChange(selection) {
        this.ids = selection.map(item => item.configId)
        this.single = selection.length!=1
        this.multiple = !selection.length
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        const configId = row.configId || this.ids
        getConfig(configId).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改参数";
        });
      },

      subPreview:function()
      {
        debugger
        this.whichCatalogue = catalogue_01;
      },

      /** 提交按钮 */
      submitForm: function() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.configId != undefined) {
              updateConfig(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            } else {
              addConfig(this.form).then(response => {
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
        const configIds = row.configId || this.ids;
        this.$confirm('是否确认删除参数编号为"' + configIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delConfig(configIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有参数数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportConfig(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
      }
    }
  };
</script>
