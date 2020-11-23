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
        <el-select v-model="queryParams.firstOrder" placeholder="模块" clearable size="small">
          <el-option
            v-for="catalogue in catalogues"
            :key="catalogue.key"
            :label="catalogue.value"
            :value="catalogue.key"
          />
        </el-select>
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
        >新增
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:config:remove']"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:config:export']"
        >导出
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="catalogueList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" min-width="6%" align="center"/>
      <el-table-column label="目录" align="center" min-width="8%" prop="sectionOrderName"/>
      <el-table-column label="章节" align="center" min-width="8%" prop="firstOrder" :show-overflow-tooltip="true"/>
      <el-table-column label="标题" align="center" min-width="25%" prop="sectionTitle" :show-overflow-tooltip="true"/>
      <el-table-column label="中文标题" align="center" min-width="17%" prop="sectionTitleZh"/>
      <el-table-column label="填写角色" align="center" min-width="8%" prop="roleName"/>
      <el-table-column label="模块" align="center" min-width="6%" prop="moduleName" :show-overflow-tooltip="true"/>
      <el-table-column label="创建时间" align="center" min-width="12%" prop="createTime">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="10%" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:config:edit']"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:config:remove']"
          >删除
          </el-button>
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
    <el-dialog :title="title" :visible.sync="open" width="600px" @close="closeDialog" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="目录序号" prop="sectionOrderName">
              <el-input style="width:100%" v-model="form.sectionOrderName" clearable placeholder="请输入目录序号"
                        @input = "changeFirstOrder"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="章节" prop="firstOrderName">
              <el-input style="width:100%" v-model="form.firstOrderName" disabled/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12">
            <el-form-item label="标题" prop="sectionTitle">
              <el-input style="width:100%" v-model="form.sectionTitle" clearable placeholder="请输入标题"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="中文标题" prop="sectionTitleZh">
              <el-input style="width:100%" v-model="form.sectionTitleZh" clearable placeholder="请输入中文标题"/>
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
          <el-col :span="12">
            <el-form-item label="版本年号" prop="versionYear">
              <el-date-picker
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
            <el-form-item label="关联附录" prop="isRelateAnnex">
              <el-switch on-value="1" off-value="0" inactive-value=false v-model="form.isRelateAnnex"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附录页数" prop="relateAnnexPage">
              <el-input-number style="width:100%" v-model="form.relateAnnexPage" controls-position="right" :min="0"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="附录名称" prop="relateAnnex">
              <el-input style="width:100%" v-model="form.relateAnnex" clearable placeholder="请输入附录名称"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="div预览" prop="divPreview">
        </el-form-item>
        <el-form-item  prop="divPreview">
          <component v-bind:is="whichCatalogue"></component>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subPreview">预览</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {selectAllRoles} from "@/api/system/role";

  import {add, list, deleteBatch, getOne, update} from "@/api/vertify/standardInput";


  import catalogue_0 from '../../../components/Vertify/Catalogue/0/catalogue_0'
  import catalogue_0_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.1'
  import catalogue_0_2 from '../../../components/Vertify/Catalogue/0/catalogue_0.2'
  import catalogue_0_3 from '../../../components/Vertify/Catalogue/0/catalogue_0.3'
  import catalogue_0_4 from '../../../components/Vertify/Catalogue/0/catalogue_0.4'
  import catalogue_0_5 from '../../../components/Vertify/Catalogue/0/catalogue_0.5'
  import catalogue_0_6 from '../../../components/Vertify/Catalogue/0/catalogue_0.6'
  import catalogue_0_8 from '../../../components/Vertify/Catalogue/0/catalogue_0.8'
  import catalogue_0_9 from '../../../components/Vertify/Catalogue/0/catalogue_0.9'
  import catalogue_0_10 from '../../../components/Vertify/Catalogue/0/catalogue_0.10'
  import catalogue_0_11 from '../../../components/Vertify/Catalogue/0/catalogue_0.11'
  import catalogue_0_12 from '../../../components/Vertify/Catalogue/0/catalogue_0.12'
  import catalogue_0_13 from '../../../components/Vertify/Catalogue/0/catalogue_0.13'
  import catalogue_0_14 from '../../../components/Vertify/Catalogue/0/catalogue_0.14'
  import catalogue_0_2_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.2.1'
  import catalogue_0_3_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.3.1'
  import catalogue_0_6_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.6.1'
  import catalogue_0_3_1_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.3.1.1'
  import catalogue_0_3_1_2 from '../../../components/Vertify/Catalogue/0/catalogue_0.3.1.2'

  import catalogue_1 from '../../../components/Vertify/Catalogue/1/catalogue_1'
  import catalogue_1_1 from '../../../components/Vertify/Catalogue/1/catalogue_1.1'
  import catalogue_1_2 from '../../../components/Vertify/Catalogue/1/catalogue_1.2'
  import catalogue_1_3 from '../../../components/Vertify/Catalogue/1/catalogue_1.3'
  import catalogue_1_4 from '../../../components/Vertify/Catalogue/1/catalogue_1.4'
  import catalogue_1_5 from '../../../components/Vertify/Catalogue/1/catalogue_1.5'
  import catalogue_1_7 from '../../../components/Vertify/Catalogue/1/catalogue_1.7'
  import catalogue_1_8 from '../../../components/Vertify/Catalogue/1/catalogue_1.8'
  import catalogue_1_9 from '../../../components/Vertify/Catalogue/1/catalogue_1.9'
  import catalogue_1_10 from '../../../components/Vertify/Catalogue/1/catalogue_1.10'
  import catalogue_1_3_1 from '../../../components/Vertify/Catalogue/1/catalogue_1.3.1'
  import catalogue_1_3_2 from '../../../components/Vertify/Catalogue/1/catalogue_1.3.2'
  import catalogue_1_3_3 from '../../../components/Vertify/Catalogue/1/catalogue_1.3.3'
  import catalogue_1_8_1 from '../../../components/Vertify/Catalogue/1/catalogue_1.8.1'

  import catalogue_2 from "../../../components/Vertify/Catalogue/2/catalogue_2";
  import catalogue_2_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.1";
  import catalogue_2_1_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.1.1";
  import catalogue_2_1_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.1.2";
  import catalogue_2_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.2";
  import catalogue_2_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.3";
  //S占位
  import catalogue_2_3SR51S from "../../../components/Vertify/Catalogue/2/catalogue_2.3.(R51)";
  import catalogue_2_3_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.3.1";
  import catalogue_2_3_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.3.2";
  import catalogue_2_3_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.3.3";
  import catalogue_2_3_4 from "../../../components/Vertify/Catalogue/2/catalogue_2.3.4";
  import catalogue_2_4 from "../../../components/Vertify/Catalogue/2/catalogue_2.4";
  import catalogue_2_4_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1";
  import catalogue_2_4_1_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.1";
  import catalogue_2_4_1_1_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.1.1";
  import catalogue_2_4_1_1_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.1.2";
  import catalogue_2_4_1_1_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.1.3";
  import catalogue_2_4_1_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.2";
  import catalogue_2_4_1_2_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.2.1";
  import catalogue_2_4_1_2_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.2.2";
  import catalogue_2_4_1_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.3";
  import catalogue_2_4_1_4 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.4";
  import catalogue_2_4_1_4_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.4.1";
  import catalogue_2_4_1_5 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.5";
  import catalogue_2_4_1_5_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.5.1";
  import catalogue_2_4_1_5_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.5.2";
  import catalogue_2_4_1_6 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.6";
  import catalogue_2_4_1_6_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.6.1";
  import catalogue_2_4_1_6_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.6.2";
  import catalogue_2_4_1_6_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.6.3";
  import catalogue_2_4_1_8 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.1.8";
  import catalogue_2_4_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2";
  import catalogue_2_4_2_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.1";
  import catalogue_2_4_2_1_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.1.1";
  import catalogue_2_4_2_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.2";
  import catalogue_2_4_2_2_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.2.1";
  import catalogue_2_4_2_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.3";
  import catalogue_2_4_2_4 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.4";
  import catalogue_2_4_2_4_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.4.1";
  import catalogue_2_4_2_5 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.5";
  import catalogue_2_4_2_5_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.5.1";
  import catalogue_2_4_2_5_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.5.2";
  import catalogue_2_4_2_6 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.6";
  import catalogue_2_4_2_6_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.6.1";
  import catalogue_2_4_2_6_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.6.2";
  import catalogue_2_4_2_6_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.6.3";
  import catalogue_2_4_2_8 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.2.8";
  import catalogue_2_4_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.4.3";
  import catalogue_2_5 from "../../../components/Vertify/Catalogue/2/catalogue_2.5";
  import catalogue_2_6 from "../../../components/Vertify/Catalogue/2/catalogue_2.6";
  import catalogue_2_6_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.6.1";
  import catalogue_2_6_2 from "../../../components/Vertify/Catalogue/2/catalogue_2.6.2";
  import catalogue_2_7SR13S from "../../../components/Vertify/Catalogue/2/catalogue_2.7.(R13)";
  import catalogue_2_8 from "../../../components/Vertify/Catalogue/2/catalogue_2.8";
  import catalogue_2_8_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.8.1";
  import catalogue_2_9 from "../../../components/Vertify/Catalogue/2/catalogue_2.9";
  import catalogue_2_10 from "../../../components/Vertify/Catalogue/2/catalogue_2.10";
  import catalogue_2_11 from "../../../components/Vertify/Catalogue/2/catalogue_2.11";
  import catalogue_2_11_3 from "../../../components/Vertify/Catalogue/2/catalogue_2.11.3";
  import catalogue_2_11_3_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.11.3.1";
  import catalogue_2_11_4 from "../../../components/Vertify/Catalogue/2/catalogue_2.11.4";
  import catalogue_2_11_5 from "../../../components/Vertify/Catalogue/2/catalogue_2.11.5";
  import catalogue_2_11_6 from "../../../components/Vertify/Catalogue/2/catalogue_2.11.6";
  import catalogue_2_12 from "../../../components/Vertify/Catalogue/2/catalogue_2.12";
  import catalogue_2_12_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.12.1";
  import catalogue_2_16 from "../../../components/Vertify/Catalogue/2/catalogue_2.16";

  import catalogue_3 from "../../../components/Vertify/Catalogue/3/catalogue_3";
  import catalogue_3_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.1";
  import catalogue_3_1_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.1.1";
  import catalogue_3_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2";
  import catalogue_3_2_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1";
  import catalogue_3_2_1_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.1";
  import catalogue_3_2_1_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.2";
  import catalogue_3_2_1_2_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.2.1";
  import catalogue_3_2_1_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.3";
  import catalogue_3_2_1_9SR89S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.9(R89)";
  import catalogue_3_2_1_10SR89S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.1.10(R89)";
  import catalogue_3_2_3_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.1";
  import catalogue_3_2_3_1_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.1.1";
  import catalogue_3_2_3_1_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.1.2";
  import catalogue_3_2_3_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.2";
  import catalogue_3_2_3_2_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.2.1";
  import catalogue_3_2_3_2_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.3.2.2";
  import catalogue_3_2_4SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4(R51)";
  import catalogue_3_2_4_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.1";
  import catalogue_3_2_4_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.2";
  import catalogue_3_2_4_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.3";
  import catalogue_3_2_4_4 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.4";
  import catalogue_3_2_6SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6(R51)";
  import catalogue_3_2_6_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6.1";
  import catalogue_3_2_6_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6.2";
  import catalogue_3_3SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.3(R51)";
  import catalogue_3_3_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.3.1";
  import catalogue_3_3_1_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.3.1.1";
  import catalogue_3_3_1_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.3.1.2";
  import catalogue_3_4_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.1";
  import catalogue_3_4_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.2";
  import catalogue_3_4_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.3";
  import catalogue_3_4_3_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.3.1";
  import catalogue_3_4_3_1_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.3.1.1";
  import catalogue_3_4_3_1_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.3.1.2";
  import catalogue_3_4_3_1_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.3.1.3";
  import catalogue_3_4_4 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.4";
  import catalogue_3_4_4_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.4.1";
  import catalogue_3_4_4_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.4.2";
  import catalogue_3_4_4_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.4.4.3";


  import catalogue_4 from "../../../components/Vertify/Catalogue/4/catalogue_4";
  import catalogue_4_2SR39R89S from "../../../components/Vertify/Catalogue/4/catalogue_4.2(R39R89)";
  import catalogue_4_3 from "../../../components/Vertify/Catalogue/4/catalogue_4.3";
  import catalogue_4_5 from "../../../components/Vertify/Catalogue/4/catalogue_4.5";
  import catalogue_4_5_1 from "../../../components/Vertify/Catalogue/4/catalogue_4.5.1";
  import catalogue_4_7SR89S from "../../../components/Vertify/Catalogue/4/catalogue_4.7(R89)";
  import catalogue_4_7SR39S from "../../../components/Vertify/Catalogue/4/catalogue_4.7(R39)";
  import catalogue_4_8 from "../../../components/Vertify/Catalogue/4/catalogue_4.8";
  import catalogue_4_8_1 from "../../../components/Vertify/Catalogue/4/catalogue_4.8.1";
  import catalogue_4_8_2 from "../../../components/Vertify/Catalogue/4/catalogue_4.8.2";
  import catalogue_4_8_3 from "../../../components/Vertify/Catalogue/4/catalogue_4.8.3";
  import catalogue_4_8_4 from "../../../components/Vertify/Catalogue/4/catalogue_4.8.4";
  import catalogue_4_8_5 from "../../../components/Vertify/Catalogue/4/catalogue_4.8.5";

  import catalogue_5 from "../../../components/Vertify/Catalogue/5/catalogue_5";
  import catalogue_5_1 from "../../../components/Vertify/Catalogue/5/catalogue_5.1";
  import catalogue_5_2 from "../../../components/Vertify/Catalogue/5/catalogue_5.2";
  import catalogue_5_3 from "../../../components/Vertify/Catalogue/5/catalogue_5.3";
  import catalogue_5_4 from "../../../components/Vertify/Catalogue/5/catalogue_5.4";
  import catalogue_5_5 from "../../../components/Vertify/Catalogue/5/catalogue_5.5";

  import catalogue_6 from "../../../components/Vertify/Catalogue/6/catalogue_6";
  import catalogue_6_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.1";
  import catalogue_6_2 from "../../../components/Vertify/Catalogue/6/catalogue_6.2";
  import catalogue_6_2_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.2.1";
  import catalogue_6_2_3 from "../../../components/Vertify/Catalogue/6/catalogue_6.2.3";
  import catalogue_6_2_4 from "../../../components/Vertify/Catalogue/6/catalogue_6.2.4";
  import catalogue_6_6 from "../../../components/Vertify/Catalogue/6/catalogue_6.6";
  import catalogue_6_6_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1";
  import catalogue_6_6_1S458S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1(458)";
  import catalogue_6_6_1_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1";
  import catalogue_6_6_1_1_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.1";
  import catalogue_6_6_1_1_2 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.2";
  import catalogue_6_6_1_1_3 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.3";
  import catalogue_6_6_3S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.3(109)";
  import catalogue_6_6_4S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.4(109)";
  import catalogue_6_6_6S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.6(109)";


  export default {
    name: "catalogue",

    components: {
      catalogue_0,
      catalogue_0_1,
      catalogue_0_2,
      catalogue_0_3,
      catalogue_0_4,
      catalogue_0_5,
      catalogue_0_6,
      catalogue_0_8,
      catalogue_0_9,
      catalogue_0_10,
      catalogue_0_11,
      catalogue_0_12,
      catalogue_0_13,
      catalogue_0_14,
      catalogue_0_2_1,
      catalogue_0_3_1,
      catalogue_0_6_1,
      catalogue_0_3_1_1,
      catalogue_0_3_1_2,

      catalogue_1,
      catalogue_1_1,
      catalogue_1_2,
      catalogue_1_3,
      catalogue_1_4,
      catalogue_1_5,
      catalogue_1_7,
      catalogue_1_8,
      catalogue_1_9,
      catalogue_1_10,
      catalogue_1_3_1,
      catalogue_1_3_2,
      catalogue_1_3_3,
      catalogue_1_8_1,

      catalogue_2,
      catalogue_2_1,
      catalogue_2_1_1,
      catalogue_2_1_2,
      catalogue_2_2,
      catalogue_2_3,
      catalogue_2_3SR51S,
      catalogue_2_3_1,
      catalogue_2_3_2,
      catalogue_2_3_3,
      catalogue_2_3_4,
      catalogue_2_4,
      catalogue_2_4_1,
      catalogue_2_4_1_1,
      catalogue_2_4_1_1_1,
      catalogue_2_4_1_1_2,
      catalogue_2_4_1_1_3,
      catalogue_2_4_1_2,
      catalogue_2_4_1_2_1,
      catalogue_2_4_1_2_2,
      catalogue_2_4_1_3,
      catalogue_2_4_1_4,
      catalogue_2_4_1_4_1,
      catalogue_2_4_1_5,
      catalogue_2_4_1_5_1,
      catalogue_2_4_1_5_2,
      catalogue_2_4_1_6,
      catalogue_2_4_1_6_1,
      catalogue_2_4_1_6_2,
      catalogue_2_4_1_6_3,
      catalogue_2_4_1_8,
      catalogue_2_4_2,
      catalogue_2_4_2_1,
      catalogue_2_4_2_1_1,
      catalogue_2_4_2_2,
      catalogue_2_4_2_2_1,
      catalogue_2_4_2_3,
      catalogue_2_4_2_4,
      catalogue_2_4_2_4_1,
      catalogue_2_4_2_5,
      catalogue_2_4_2_5_1,
      catalogue_2_4_2_5_2,
      catalogue_2_4_2_6,
      catalogue_2_4_2_6_1,
      catalogue_2_4_2_6_2,
      catalogue_2_4_2_6_3,
      catalogue_2_4_2_8,
      catalogue_2_4_3,
      catalogue_2_5,
      catalogue_2_6,
      catalogue_2_6_1,
      catalogue_2_6_2,
      catalogue_2_7SR13S,
      catalogue_2_8,
      catalogue_2_8_1,
      catalogue_2_9,
      catalogue_2_10,
      catalogue_2_11,
      catalogue_2_11_3,
      catalogue_2_11_3_1,
      catalogue_2_11_4,
      catalogue_2_11_5,
      catalogue_2_11_6,
      catalogue_2_12,
      catalogue_2_12_1,
      catalogue_2_16,

      catalogue_3,
      catalogue_3_1,
      catalogue_3_1_1,
      catalogue_3_2,
      catalogue_3_2_1,
      catalogue_3_2_1_1,
      catalogue_3_2_1_2,
      catalogue_3_2_1_2_1,
      catalogue_3_2_1_3,
      catalogue_3_2_1_9SR89S,
      catalogue_3_2_1_10SR89S,
      catalogue_3_2_3_1,
      catalogue_3_2_3_1_1,
      catalogue_3_2_3_1_2,
      catalogue_3_2_3_2,
      catalogue_3_2_3_2_1,
      catalogue_3_2_3_2_2,
      catalogue_3_2_4SR51S,
      catalogue_3_2_4_1,
      catalogue_3_2_4_2,
      catalogue_3_2_4_3,
      catalogue_3_2_4_4,
      catalogue_3_2_6SR51S,
      catalogue_3_2_6_1,
      catalogue_3_2_6_2,
      catalogue_3_3SR51S,
      catalogue_3_3_1,
      catalogue_3_3_1_1,
      catalogue_3_3_1_2,
      catalogue_3_4_1,
      catalogue_3_4_2,
      catalogue_3_4_3,
      catalogue_3_4_3_1,
      catalogue_3_4_3_1_1,
      catalogue_3_4_3_1_2,
      catalogue_3_4_3_1_3,
      catalogue_3_4_4,
      catalogue_3_4_4_1,
      catalogue_3_4_4_2,
      catalogue_3_4_4_3,

      catalogue_4,
      catalogue_4_2SR39R89S,
      catalogue_4_3,
      catalogue_4_5,
      catalogue_4_5_1,
      catalogue_4_7SR89S,
      catalogue_4_7SR39S,
      catalogue_4_8,
      catalogue_4_8_1,
      catalogue_4_8_2,
      catalogue_4_8_3,
      catalogue_4_8_4,
      catalogue_4_8_5,

      catalogue_5,
      catalogue_5_1,
      catalogue_5_2,
      catalogue_5_3,
      catalogue_5_4,
      catalogue_5_5,

      catalogue_6,
      catalogue_6_1,
      catalogue_6_2,
      catalogue_6_2_1,
      catalogue_6_2_3,
      catalogue_6_2_4,
      catalogue_6_6,
      catalogue_6_6_1,
      catalogue_6_6_1S458S,
      catalogue_6_6_1_1,
      catalogue_6_6_1_1_1,
      catalogue_6_6_1_1_2,
      catalogue_6_6_1_1_3,
      catalogue_6_6_3S109S,
      catalogue_6_6_4S109S,
      catalogue_6_6_6S109S

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
          "制动", "安全带", "操纵件", "侧防护", "车身总布置", "挡泥板", "导流罩", "电磁兼容", "风窗", "后防护", "后牌照板", "后视镜", "空调(乘员舱加热系统)", "铭牌VIN", "前防护", "座椅", "车轮", "悬架", "转向", "发动机", "供油", "进气", "排气", "传动系", "车桥", "底盘", "总布置"
        ],
        catalogues: [{"key": "0", "value": "第零章节"}, {"key": "1", "value": "第一章节"}, {
          "key": "2",
          "value": "第二章节"
        }, {"key": "3", "value": "第三章节"}, {"key": "4", "value": "第四章节"}, {"key": "5", "value": "第五章节"}, {
          "key": "6",
          "value": "第六章节"
        }, {"key": "7", "value": "第七章节"}, {"key": "8", "value": "第八章节"}, {"key": "9", "value": "第九章节"}, {
          "key": "10",
          "value": "第十章节"
        }, {"key": "11", "value": "第十一章节"}, {"key": "12", "value": "第十二章节"}, {"key": "13", "value": "第十三章节"}]
        ,
        specialCatalogueKeys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
        inputTypes: [{"key": "title", "value": "标题"}, {"key": "input", "value": "输入框"}, {
          "key": "image",
          "value": "图片"
        }],
        multiInput: [{"key": "catalogue_0.2", "value": 3}],
        whichCatalogue: undefined,
        roles: [],
        // 日期范围
        dateRange: [],

        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e6;
          }
        },
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          firstOrder: undefined,
          moduleName: undefined,
          sectionOrderName: undefined,
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
          sectionOrderName: [
            {required: true, message: "目录序号不能为空", trigger: "blur"},
            {validator: this.checkSectionOrderName, trigger: ['blur', 'keyup']},
          ],
          inputType: [
            {required: true, message: "类型不能为空", trigger: "blur"}
          ],
          versionYear: [
            {required: true, message: "版本年号不能为空", trigger: "blur"}
          ],
          moduleName: [
            {required: true, message: "模块不能为空", trigger: "blur"}
          ],
          role: [
            {required: true, message: "角色不能为空", trigger: "blur"}
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
      closeDialog() {
        this.whichCatalogue = undefined;
      },

      checkSectionOrderName(rule, value, callback) {
        const re = /[0-9]+(?!.*?\.\.)([\.]{0,6})/;
        const rsCheck = re.test(value);
        if (!rsCheck) {
          callback(new Error('目录序号不合法'));
        }
        if (undefined == this.form.firstOrderName || "" == this.form.firstOrderName) {
          callback(new Error('目录序号不合法'));
        }
        callback();
      },

      assignRoleValue(list) {
        for (let i = 0; i < list.length; i++) {
          let item = {};
          item.roleName = list[i].roleName;
          item.roleKey = list[i].roleKey;
          item.roleId = list[i].roleId;
          this.roles.push(item);
        }
      },

      changeFirstOrder() {
        this.whichCatalogue = undefined;
        let sectionOrderName = this.form.sectionOrderName;
        if (this.specialCatalogueKeys.indexOf(sectionOrderName) > -1) {
          this.catalogues.forEach(item => {
            if (sectionOrderName == item.key) {
              this.$set(this.form, "firstOrderName", item.value)
              return;
            }
          })
          return;
        }

        let first = sectionOrderName.substring(0, sectionOrderName.indexOf("."));
        if (undefined == first || "" == first) {
          this.$set(this.form, "firstOrderName", "")
          return;
        }
        this.catalogues.forEach(item => {
          if (first == item.key) {
            this.$set(this.form, "firstOrderName", item.value)
            return;
          }
        })
      },

      /** 查询参数列表 */
      getList() {
        list(this.queryParams).then(response => {
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
        this.catalogueList = [];
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          let obj = {};
          obj.id = item.id;
          obj.sectionOrderName = item.sectionOrderName;
          this.catalogues.forEach(it => {
            if (item.firstOrder == it.key) {
              obj.firstOrder = it.value;
              return;
            }
          });
          obj.sectionTitle = item.sectionTitle;
          obj.sectionTitleZh = item.sectionTitleZh;
          this.roles.forEach((it) => {
            if (item.role == it.roleId) {
              obj.roleName = it.roleName;
              return;
            }
          });
          obj.moduleName = item.moduleName;
          obj.createTime = item.gmtCreate;
          this.catalogueList.push(obj);
        }
      },

      // 取消按钮
      cancel() {
        this.whichCatalogue = undefined;
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          sectionOrderName: undefined,
          firstOrder: undefined,
          secondOrder: undefined,
          thirdOrder: undefined,
          fourthOrder: undefined,
          sixthOrder: undefined,
          seventhOrder: undefined,
          sectionTitle: undefined,
          sectionTitleZh: undefined,
          inputType: undefined,
          versionYear: undefined,
          moduleName: undefined,
          role: undefined,
          isRelateAnnex: undefined,
          relateAnnexPage: undefined,
          relateAnnex:undefined,
          domId:undefined,
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
        this.ids = selection.map(item => item.id)
        this.single = selection.length != 1
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
        this.form.sectionOrderName = data.sectionOrderName;
        this.catalogues.forEach(it => {
          if (data.firstOrder == it.key) {
            this.form.firstOrderName = it.value;
            return;
          }
        });
        this.form.sectionTitle = data.sectionTitle;
        this.form.sectionTitleZh = data.sectionTitleZh;
        this.roles.forEach((it) => {
          if (data.role == it.roleId) {
            this.$set(this.form, "role", it.roleId);
            return;
          }
        });
        this.form.moduleName = data.moduleName;
        this.form.versionYear = data.versionYear;
        this.inputTypes.forEach((it) => {
          if (data.inputType == it.key) {
            this.$set(this.form, "inputType", it.key);
            return;
          }
        });
        this.form.isRelateAnnex = data.isRelateAnnex;
        this.form.relateAnnexPage = data.relateAnnexPage;
        this.form.relateAnnex = data.relateAnnex;
      },
      subPreview: function () {
        let sectionOrderName = this.form.sectionOrderName;
        if (undefined == sectionOrderName || "" == sectionOrderName) {
          return;
        }
        this.whichCatalogue = "catalogue_" + sectionOrderName.replace(/\./g,"_").
        replace(/\\/g,"").replace(/\(\)/g,"S");
        debugger
      },

      assignOrderValue(sectionOrderName) {
        if (undefined == sectionOrderName) {
          return;
        }
        if (this.specialCatalogueKeys.indexOf(sectionOrderName) > -1) {
          this.form.firstOrder = sectionOrderName;
          return;
        }
        let sectionOrderArray = sectionOrderName.split(".");
        sectionOrderArray.forEach((item, index) => {
          switch (index) {
            case 0 :
              this.form.firstOrder = item;
              break;
            case 1 :
              this.form.secondOrder = item;
              break;
            case 2 :
              this.form.thirdOrder = item;
              break;
            case 3 :
              this.form.fourthOrder = item;
              break;
            case 4 :
              this.form.fifthOrder = item;
              break;
            case 5 :
              this.form.sixthOrder = item;
              break;
            case 6:
              this.form.seventhOrder = item;
              break;
          }
        });
      },

      deepCopy(obj) {
          obj.sectionOrderName = this.form.sectionOrderName,
          obj.firstOrder = this.form.firstOrder,
          obj.secondOrder = this.form.secondOrder,
          obj.thirdOrder = this.form.thirdOrder,
          obj.fourthOrder = this.form.fourthOrder,
          obj.sixthOrder = this.form.sixthOrder,
          obj.seventhOrder = this.form.seventhOrder,
          obj.sectionTitle = this.form.sectionTitle,
          obj.sectionTitleZh = this.form.sectionTitleZh,
          obj.inputType = this.form.inputType,
          obj.versionYear = this.form.versionYear,
          obj.moduleName = this.form.moduleName,
          obj.role = this.form.role,
          obj.isRelateAnnex = this.form.isRelateAnnex,
          obj.relateAnnexPage = this.form.relateAnnexPage,
            obj.relateAnnex = this.form.relateAnnex
      },

      /** 提交按钮 */
      submitForm: function () {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != undefined) {
              update(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                } else {
                  debugger
                  this.msgError(response.msg);
                }
              });
            } else {
              let sectionOrderName = "catalogue_" + this.form.sectionOrderName;
              let num = 1;
              this.multiInput.forEach(item => {
                if (item.key == sectionOrderName) {
                  num = item.value;
                  return;
                }
              })
              this.assignOrderValue(this.form.sectionOrderName);
              let requestParam = [];
              for (let i = 0;i < num;i++) {
                let obj = new Object();
                this.deepCopy(obj);
                obj.domId = this.form.sectionOrderName + "_" + i;
                requestParam.push(obj);
              }
              let standardInputListJson = JSON.stringify(requestParam);
              add(standardInputListJson).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("新增成功");
                  this.open = false;
                  this.getList();
                } else {
                  this.msgError(response.msg);
                }
              });
            }
            this.whichCatalogue = undefined;
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
        this.$confirm('是否确认导出所有参数数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          return exportConfig(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function () {
        });
      }
    }
  };
</script>
