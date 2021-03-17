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
    <el-dialog :title="title" :visible.sync="open" width="800px" @close="closeDialog" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="目录序号" prop="sectionOrderName">
              <el-input style="width:80%" v-model="form.sectionOrderName" clearable placeholder="请输入目录序号"
                        @input = "changeFirstOrder" @blur="showPreview"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="章节" prop="firstOrderName">
              <el-input style="width:80%" v-model="form.firstOrderName" disabled/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="12">
            <el-form-item label="标题" prop="sectionTitle">
              <el-input style="width:80%" v-model="form.sectionTitle" clearable placeholder="请输入标题"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="中文标题" prop="sectionTitleZh">
              <el-input style="width:80%" v-model="form.sectionTitleZh" clearable placeholder="请输入中文标题"/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <el-form-item label="类型" prop="inputType">
              <el-select style="width:80%"  v-model="form.inputType" size="small" clearable
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
              <el-date-picker style="width:80%"
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
              <el-select style="width:80%"  v-model="form.moduleName" size="small" clearable
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
              <el-select style="width:80%"  v-model="form.role" size="small" clearable placeholder="请选择角色">
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
              <el-switch on-value="1" off-value="0" inactive-value=false v-model="form.isRelateAnnex" @change="changeAnnex"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附录页数" prop="relateAnnexPages">
              <el-select style="width:80%"  v-model="form.relateAnnexPages" size="small"  multiple placeholder="请选择附录页数">
                <el-option
                  v-for="annexPage in relateAnnexPages"
                  :key="annexPage"
                  :label="annexPage"
                  :value="annexPage"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="显示序号" prop="showOrder">
              <el-switch on-value="1" off-value="0" inactive-value = "0" active-value = "1" v-model="form.showOrder"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="唯一编码" prop="uniqueKey">
              <el-input style="width:80%" v-model="form.uniqueKey" clearable placeholder="请输入唯一编码"/>
              <br/><span  style="color:#ADADAD;" v-if="maxUniqueKey != undefined && maxUniqueKey != null">当前最大的唯一编码是{{this.maxUniqueKey}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="附录名称" prop="relateAnnex">
              <el-select style="width:80%"  v-model="form.relateAnnex" size="small" clearable placeholder="请选择附录名称" @change="changeAnnexPage">
                <el-option
                  v-for="annex in relateAnnexs"
                  :key="annex"
                  :label="annex"
                  :value="annex"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="div预览" prop="divPreview">
        </el-form-item>
        <el-form-item  prop="divPreview">
          <component v-bind:is="whichCatalogue" ref='cate'></component>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subPreview">获取标题</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {selectAllRoles} from "@/api/system/role";

  import {add, list, deleteBatch, getOne, update,getMaxUniqueKey} from "@/api/vertify/standardInput";


  import catalogue_0 from '../../../components/Vertify/Catalogue/0/catalogue_0'
  import catalogue_0_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.1'
  import catalogue_0_2 from '../../../components/Vertify/Catalogue/0/catalogue_0.2'
  import catalogue_0_2_0_1 from '../../../components/Vertify/Catalogue/0/catalogue_0.2.0.1'
  import catalogue_0_2_0_2 from '../../../components/Vertify/Catalogue/0/catalogue_0.2.0.2'
  import catalogue_0_2_0_3 from '../../../components/Vertify/Catalogue/0/catalogue_0.2.0.3'
  import catalogue_0_3 from '../../../components/Vertify/Catalogue/0/catalogue_0.3'
  import catalogue_0_4 from '../../../components/Vertify/Catalogue/0/catalogue_0.4'
  import catalogue_0_5 from '../../../components/Vertify/Catalogue/0/catalogue_0.5'
  import catalogue_0_6 from '../../../components/Vertify/Catalogue/0/catalogue_0.6'
  import catalogue_0_6_2 from '../../../components/Vertify/Catalogue/0/catalogue_0.6.2'
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
  import catalogue_2_3_SR51S from "../../../components/Vertify/Catalogue/2/catalogue_2.3.(R51)";
  import catalogue_2_3_SR51S_1 from "../../../components/Vertify/Catalogue/2/catalogue_2.3.(R51).1";
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
  import catalogue_2_7_SR13S from "../../../components/Vertify/Catalogue/2/catalogue_2.7.(R13)";
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
  import catalogue_3_2_4_SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.(R51)";
  import catalogue_3_2_4_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.1";
  import catalogue_3_2_4_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.2";
  import catalogue_3_2_4_3 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.3";
  import catalogue_3_2_4_4 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.4.4";
  import catalogue_3_2_6_SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6.(R51)";
  import catalogue_3_2_6_1 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6.1";
  import catalogue_3_2_6_2 from "../../../components/Vertify/Catalogue/3/catalogue_3.2.6.2";
  import catalogue_3_3_SR51S from "../../../components/Vertify/Catalogue/3/catalogue_3.3.(R51)";
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
  import catalogue_4_2_SR39R89S from "../../../components/Vertify/Catalogue/4/catalogue_4.2.(R39R89)";
  import catalogue_4_3 from "../../../components/Vertify/Catalogue/4/catalogue_4.3";
  import catalogue_4_5 from "../../../components/Vertify/Catalogue/4/catalogue_4.5";
  import catalogue_4_5_1 from "../../../components/Vertify/Catalogue/4/catalogue_4.5.1";
  import catalogue_4_7SR89S from "../../../components/Vertify/Catalogue/4/catalogue_4.7(R89)";
  import catalogue_4_7_SR39S from "../../../components/Vertify/Catalogue/4/catalogue_4.7.(R39)";
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
  import catalogue_6_6_1_S458S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.(458)";
  import catalogue_6_6_1_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1";
  import catalogue_6_6_1_1_1 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.1";
  import catalogue_6_6_1_1_2 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.2";
  import catalogue_6_6_1_1_3 from "../../../components/Vertify/Catalogue/6/catalogue_6.6.1.1.3";
  import catalogue_6_6_3_S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.3.(109)";
  import catalogue_6_6_4_S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.4.(109)";
  import catalogue_6_6_6S109S from "../../../components/Vertify/Catalogue/6/catalogue_6.6.6(109)";

  import catalogue_7 from "../../../components/Vertify/Catalogue/7/catalogue_7";
  import catalogue_7_1 from "../../../components/Vertify/Catalogue/7/catalogue_7.1";
  import catalogue_7_2 from "../../../components/Vertify/Catalogue/7/catalogue_7.2";
  import catalogue_7_2_1 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.1";
  import catalogue_7_2_2 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.2";
  import catalogue_7_2_3 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.3";
  import catalogue_7_2_3_1 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.3.1";
  import catalogue_7_2_4 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.4";
  import catalogue_7_2_5 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.5";
  import catalogue_7_2_6 from "../../../components/Vertify/Catalogue/7/catalogue_7.2.6";
  import catalogue_7_3 from "../../../components/Vertify/Catalogue/7/catalogue_7.3";
  import catalogue_7_3_1 from "../../../components/Vertify/Catalogue/7/catalogue_7.3.1";
  import catalogue_7_3_2 from "../../../components/Vertify/Catalogue/7/catalogue_7.3.2";

  import catalogue_8 from "../../../components/Vertify/Catalogue/8/catalogue_8";
  import catalogue_8_1 from "../../../components/Vertify/Catalogue/8/catalogue_8.1";
  import catalogue_8_2 from "../../../components/Vertify/Catalogue/8/catalogue_8.2";
  import catalogue_8_2_1 from "../../../components/Vertify/Catalogue/8/catalogue_8.2.1";
  import catalogue_8_2_2 from "../../../components/Vertify/Catalogue/8/catalogue_8.2.2";
  import catalogue_8_2_3 from "../../../components/Vertify/Catalogue/8/catalogue_8.2.3";
  import catalogue_8_2_4 from "../../../components/Vertify/Catalogue/8/catalogue_8.2.4";
  import catalogue_8_3 from "../../../components/Vertify/Catalogue/8/catalogue_8.3";
  import catalogue_8_4 from "../../../components/Vertify/Catalogue/8/catalogue_8.4";
  import catalogue_8_5 from "../../../components/Vertify/Catalogue/8/catalogue_8.5";
  import catalogue_8_5_1 from "../../../components/Vertify/Catalogue/8/catalogue_8.5.1";
  import catalogue_8_6 from "../../../components/Vertify/Catalogue/8/catalogue_8.6";
  import catalogue_8_7 from "../../../components/Vertify/Catalogue/8/catalogue_8.7";
  import catalogue_8_7_1 from "../../../components/Vertify/Catalogue/8/catalogue_8.7.1";
  import catalogue_8_7_2 from "../../../components/Vertify/Catalogue/8/catalogue_8.7.2";
  import catalogue_8_8 from "../../../components/Vertify/Catalogue/8/catalogue_8.8";
  import catalogue_8_9 from "../../../components/Vertify/Catalogue/8/catalogue_8.9";
  import catalogue_8_10 from "../../../components/Vertify/Catalogue/8/catalogue_8.10";
  import catalogue_8_11 from "../../../components/Vertify/Catalogue/8/catalogue_8.11";

  import catalogue_9 from "../../../components/Vertify/Catalogue/9/catalogue_9";
  import catalogue_9_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.1";
  import catalogue_9_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.2";
  import catalogue_9_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.5";
  import catalogue_9_5_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1";
  import catalogue_9_5_1_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1.1";
  import catalogue_9_5_1_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1.2";
  import catalogue_9_5_1_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1.3";
  import catalogue_9_5_1_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1.4";
  import catalogue_9_5_1_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.1.5";
  import catalogue_9_5_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.2";
  import catalogue_9_5_2_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.2.1";
  import catalogue_9_5_2_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.2.2";
  import catalogue_9_5_2_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.2.3";
  import catalogue_9_5_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.3";
  import catalogue_9_5_3_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.3.1";
  import catalogue_9_5_3_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.3.2";
  import catalogue_9_5_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.4";
  import catalogue_9_5_4_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.4.1";
  import catalogue_9_5_4_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.5.4.2";
  import catalogue_9_9 from "../../../components/Vertify/Catalogue/9/catalogue_9.9";
  import catalogue_9_9_7 from "../../../components/Vertify/Catalogue/9/catalogue_9.9.7";
  import catalogue_9_10 from "../../../components/Vertify/Catalogue/9/catalogue_9.10";
  import catalogue_9_10_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.2";
  import catalogue_9_10_2_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.2.1";
  import catalogue_9_10_2_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.2.2";
  import catalogue_9_10_2_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.2.3";
  import catalogue_9_10_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3";
  import catalogue_9_10_3_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3.1";
  import catalogue_9_10_3_1_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3.1.1";
  import catalogue_9_10_3_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3.5";
  import catalogue_9_10_3_5_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3.5.1";
  import catalogue_9_10_3_5_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.10.3.5.2";
  import catalogue_9_11 from "../../../components/Vertify/Catalogue/9/catalogue_9.11";
  import catalogue_9_11_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.11.1";
  import catalogue_9_11_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.11.2";
  import catalogue_9_11_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.11.3";
  import catalogue_9_11_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.11.4";
  import catalogue_9_11_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.11.5";
  import catalogue_9_12 from "../../../components/Vertify/Catalogue/9/catalogue_9.12";
  import catalogue_9_12_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.12.4";
  import catalogue_9_14 from "../../../components/Vertify/Catalogue/9/catalogue_9.14";
  import catalogue_9_14_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.1";
  import catalogue_9_14_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.2";
  import catalogue_9_14_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.3";
  import catalogue_9_14_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.4";
  import catalogue_9_14_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.5";
  import catalogue_9_14_6 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.6";
  import catalogue_9_14_7 from "../../../components/Vertify/Catalogue/9/catalogue_9.14.7";
  import catalogue_9_15_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.15.1";
  import catalogue_9_15_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.15.2";
  import catalogue_9_16 from "../../../components/Vertify/Catalogue/9/catalogue_9.16";
  import catalogue_9_16_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.16.1";
  import catalogue_9_16_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.16.2";
  import catalogue_9_17 from "../../../components/Vertify/Catalogue/9/catalogue_9.17";
  import catalogue_9_17_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.1";
  import catalogue_9_17_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.2";
  import catalogue_9_17_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.3";
  import catalogue_9_17_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.4";
  import catalogue_9_17_4_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.4.1";
  import catalogue_9_17_4_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.4.2";
  import catalogue_9_17_5 from "../../../components/Vertify/Catalogue/9/catalogue_9.17.5";
  import catalogue_9_18 from "../../../components/Vertify/Catalogue/9/catalogue_9.18";
  import catalogue_9_18_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.18.1";
  import catalogue_9_18_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.18.2";
  import catalogue_9_18_3 from "../../../components/Vertify/Catalogue/9/catalogue_9.18.3";
  import catalogue_9_18_4 from "../../../components/Vertify/Catalogue/9/catalogue_9.18.4";
  import catalogue_9_19 from "../../../components/Vertify/Catalogue/9/catalogue_9.18";
  import catalogue_9_19_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.19.1";
  import catalogue_9_19_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.19.2";
  import catalogue_9_19_0 from "../../../components/Vertify/Catalogue/9/catalogue_9.19.0";
  import catalogue_9_20 from "../../../components/Vertify/Catalogue/9/catalogue_9.20";
  import catalogue_9_20_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.20.1";
  import catalogue_9_20_1_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.20.1.1";
  import catalogue_9_20_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.20.2";
  import catalogue_9_20_0 from "../../../components/Vertify/Catalogue/9/catalogue_9.20.0";
  import catalogue_9_22 from "../../../components/Vertify/Catalogue/9/catalogue_9.22";
  import catalogue_9_22_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.22.1";
  import catalogue_9_22_2 from "../../../components/Vertify/Catalogue/9/catalogue_9.22.2";
  import catalogue_9_22_0 from "../../../components/Vertify/Catalogue/9/catalogue_9.22.0";
  import catalogue_9_25 from "../../../components/Vertify/Catalogue/9/catalogue_9.25";
  import catalogue_9_25_1 from "../../../components/Vertify/Catalogue/9/catalogue_9.25.1";

  import catalogue_10 from "../../../components/Vertify/Catalogue/10/catalogue_10";
  import catalogue_10_1 from "../../../components/Vertify/Catalogue/10/catalogue_10.1";
  import catalogue_10_2 from "../../../components/Vertify/Catalogue/10/catalogue_10.2";
  import catalogue_10_3 from "../../../components/Vertify/Catalogue/10/catalogue_10.3";
  import catalogue_10_3_1 from "../../../components/Vertify/Catalogue/10/catalogue_10.3.1";
  import catalogue_10_3_2 from "../../../components/Vertify/Catalogue/10/catalogue_10.3.2";
  import catalogue_10_3_3 from "../../../components/Vertify/Catalogue/10/catalogue_10.3.3";
  import catalogue_10_3_4 from "../../../components/Vertify/Catalogue/10/catalogue_10.3.4";
  import catalogue_10_3_5 from "../../../components/Vertify/Catalogue/10/catalogue_10.3.5";
  import catalogue_10_4 from "../../../components/Vertify/Catalogue/10/catalogue_10.4";
  import catalogue_10_4_1 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.1";
  import catalogue_10_4_2 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.2";
  import catalogue_10_4_3 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.3";
  import catalogue_10_4_4 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.4";
  import catalogue_10_4_5 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.5";
  import catalogue_10_4_6 from "../../../components/Vertify/Catalogue/10/catalogue_10.4.6";
  import catalogue_10_5 from "../../../components/Vertify/Catalogue/10/catalogue_10.5";
  import catalogue_10_5_1 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.1";
  import catalogue_10_5_2 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.2";
  import catalogue_10_5_3 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.3";
  import catalogue_10_5_4 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.4";
  import catalogue_10_5_5 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.5";
  import catalogue_10_5_6 from "../../../components/Vertify/Catalogue/10/catalogue_10.5.6";
  import catalogue_10_6 from "../../../components/Vertify/Catalogue/10/catalogue_10.6";

  import catalogue_12 from "../../../components/Vertify/Catalogue/12/catalogue_12";
  import catalogue_12_2 from "../../../components/Vertify/Catalogue/12/catalogue_12.2";
  import catalogue_12_3 from "../../../components/Vertify/Catalogue/12/catalogue_12.3";
  import catalogue_12_3_1 from "../../../components/Vertify/Catalogue/12/catalogue_12.3.1";
  import catalogue_12_3_2 from "../../../components/Vertify/Catalogue/12/catalogue_12.3.2";
  import catalogue_12_3_3 from "../../../components/Vertify/Catalogue/12/catalogue_12.3.3";
  import catalogue_12_6 from "../../../components/Vertify/Catalogue/12/catalogue_12.6";
  import catalogue_12_6_1 from "../../../components/Vertify/Catalogue/12/catalogue_12.6.1";
  import catalogue_12_6_2 from "../../../components/Vertify/Catalogue/12/catalogue_12.6.2";
  import catalogue_12_6_3 from "../../../components/Vertify/Catalogue/12/catalogue_12.6.3";
  import catalogue_12_7 from "../../../components/Vertify/Catalogue/12/catalogue_12.7";
  import catalogue_12_7_1 from "../../../components/Vertify/Catalogue/12/catalogue_12.7.1";


  import catalogue_101_0 from "../../../components/Vertify/Catalogue/101/catalogue_101.0";
  import catalogue_101_5_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.5.1";
  import catalogue_101_8_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.8.1";
  import catalogue_101_40_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.40.1";
  import catalogue_101_42_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.42.1";
  import catalogue_101_43_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.43.1";
  import catalogue_101_44_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.44.1";
  import catalogue_101_46_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.46.1";
  import catalogue_101_60_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.60.1";
  import catalogue_101_59_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.59.1";


  import catalogue_101_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.1";
  import catalogue_101_2 from "../../../components/Vertify/Catalogue/101/catalogue_101.2";
  import catalogue_101_2_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.2.1";
  import catalogue_101_2_2 from "../../../components/Vertify/Catalogue/101/catalogue_101.2.2";
  import catalogue_101_2_3 from "../../../components/Vertify/Catalogue/101/catalogue_101.2.3";
  import catalogue_101_3 from "../../../components/Vertify/Catalogue/101/catalogue_101.3";
  import catalogue_101_4 from "../../../components/Vertify/Catalogue/101/catalogue_101.4";
  import catalogue_101_5 from "../../../components/Vertify/Catalogue/101/catalogue_101.5";
  import catalogue_101_5_0_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.5.0.1";
  import catalogue_101_6 from "../../../components/Vertify/Catalogue/101/catalogue_101.6";
  import catalogue_101_7 from "../../../components/Vertify/Catalogue/101/catalogue_101.7";
  import catalogue_101_8 from "../../../components/Vertify/Catalogue/101/catalogue_101.8";
  import catalogue_101_9 from "../../../components/Vertify/Catalogue/101/catalogue_101.9";
  import catalogue_101_10 from "../../../components/Vertify/Catalogue/101/catalogue_101.10";
  import catalogue_101_11 from "../../../components/Vertify/Catalogue/101/catalogue_101.11";
  import catalogue_101_12 from "../../../components/Vertify/Catalogue/101/catalogue_101.12";
  import catalogue_101_13 from "../../../components/Vertify/Catalogue/101/catalogue_101.13";
  import catalogue_101_14 from "../../../components/Vertify/Catalogue/101/catalogue_101.14";
  import catalogue_101_15 from "../../../components/Vertify/Catalogue/101/catalogue_101.15";
  import catalogue_101_16 from "../../../components/Vertify/Catalogue/101/catalogue_101.16";
  import catalogue_101_17 from "../../../components/Vertify/Catalogue/101/catalogue_101.17";
  import catalogue_101_18 from "../../../components/Vertify/Catalogue/101/catalogue_101.18";
  import catalogue_101_19 from "../../../components/Vertify/Catalogue/101/catalogue_101.19";
  import catalogue_101_20 from "../../../components/Vertify/Catalogue/101/catalogue_101.20";
  import catalogue_101_21 from "../../../components/Vertify/Catalogue/101/catalogue_101.21";
  import catalogue_101_22 from "../../../components/Vertify/Catalogue/101/catalogue_101.22";
  import catalogue_101_23 from "../../../components/Vertify/Catalogue/101/catalogue_101.23";
  import catalogue_101_24 from "../../../components/Vertify/Catalogue/101/catalogue_101.24";
  import catalogue_101_25 from "../../../components/Vertify/Catalogue/101/catalogue_101.25";
  import catalogue_101_26 from "../../../components/Vertify/Catalogue/101/catalogue_101.26";
  import catalogue_101_27 from "../../../components/Vertify/Catalogue/101/catalogue_101.27";
  import catalogue_101_28 from "../../../components/Vertify/Catalogue/101/catalogue_101.28";
  import catalogue_101_29 from "../../../components/Vertify/Catalogue/101/catalogue_101.29";
  import catalogue_101_30 from "../../../components/Vertify/Catalogue/101/catalogue_101.30";
  import catalogue_101_31 from "../../../components/Vertify/Catalogue/101/catalogue_101.31";
  import catalogue_101_32 from "../../../components/Vertify/Catalogue/101/catalogue_101.32";
  import catalogue_101_33 from "../../../components/Vertify/Catalogue/101/catalogue_101.33";
  import catalogue_101_34 from "../../../components/Vertify/Catalogue/101/catalogue_101.34";
  import catalogue_101_35 from "../../../components/Vertify/Catalogue/101/catalogue_101.35";
  import catalogue_101_36 from "../../../components/Vertify/Catalogue/101/catalogue_101.36";
  import catalogue_101_37 from "../../../components/Vertify/Catalogue/101/catalogue_101.37";
  import catalogue_101_38 from "../../../components/Vertify/Catalogue/101/catalogue_101.38";
  import catalogue_101_39 from "../../../components/Vertify/Catalogue/101/catalogue_101.39";
  import catalogue_101_40 from "../../../components/Vertify/Catalogue/101/catalogue_101.40";
  import catalogue_101_41 from "../../../components/Vertify/Catalogue/101/catalogue_101.41";
  import catalogue_101_42 from "../../../components/Vertify/Catalogue/101/catalogue_101.42";
  import catalogue_101_43 from "../../../components/Vertify/Catalogue/101/catalogue_101.43";
  import catalogue_101_44 from "../../../components/Vertify/Catalogue/101/catalogue_101.44";
  import catalogue_101_45 from "../../../components/Vertify/Catalogue/101/catalogue_101.45";
  import catalogue_101_46 from "../../../components/Vertify/Catalogue/101/catalogue_101.46";
  import catalogue_101_47 from "../../../components/Vertify/Catalogue/101/catalogue_101.47";
  import catalogue_101_48 from "../../../components/Vertify/Catalogue/101/catalogue_101.48";
  import catalogue_101_49 from "../../../components/Vertify/Catalogue/101/catalogue_101.49";
  import catalogue_101_50 from "../../../components/Vertify/Catalogue/101/catalogue_101.50";
  import catalogue_101_51 from "../../../components/Vertify/Catalogue/101/catalogue_101.51";
  import catalogue_101_52 from "../../../components/Vertify/Catalogue/101/catalogue_101.52";
  import catalogue_101_53 from "../../../components/Vertify/Catalogue/101/catalogue_101.53";
  import catalogue_101_54 from "../../../components/Vertify/Catalogue/101/catalogue_101.54";
  import catalogue_101_55 from "../../../components/Vertify/Catalogue/101/catalogue_101.55";
  import catalogue_101_56 from "../../../components/Vertify/Catalogue/101/catalogue_101.56";
  import catalogue_101_57 from "../../../components/Vertify/Catalogue/101/catalogue_101.57";
  import catalogue_101_58 from "../../../components/Vertify/Catalogue/101/catalogue_101.58";
  import catalogue_101_59 from "../../../components/Vertify/Catalogue/101/catalogue_101.59";
  import catalogue_101_60 from "../../../components/Vertify/Catalogue/101/catalogue_101.60";
  import catalogue_101_61 from "../../../components/Vertify/Catalogue/101/catalogue_101.61";
  import catalogue_101_62 from "../../../components/Vertify/Catalogue/101/catalogue_101.62";
  import catalogue_101_63 from "../../../components/Vertify/Catalogue/101/catalogue_101.63";
  import catalogue_101_64 from "../../../components/Vertify/Catalogue/101/catalogue_101.64";
  import catalogue_101_65 from "../../../components/Vertify/Catalogue/101/catalogue_101.65";
  import catalogue_101_66 from "../../../components/Vertify/Catalogue/101/catalogue_101.66";
  import catalogue_101_67 from "../../../components/Vertify/Catalogue/101/catalogue_101.67";
  import catalogue_101_68 from "../../../components/Vertify/Catalogue/101/catalogue_101.68";
  import catalogue_101_69 from "../../../components/Vertify/Catalogue/101/catalogue_101.69";
  import catalogue_101_70 from "../../../components/Vertify/Catalogue/101/catalogue_101.70";
  import catalogue_101_71 from "../../../components/Vertify/Catalogue/101/catalogue_101.71";
  import catalogue_101_72 from "../../../components/Vertify/Catalogue/101/catalogue_101.72";
  import catalogue_101_72_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.72.1";
  import catalogue_101_72_2 from "../../../components/Vertify/Catalogue/101/catalogue_101.72.2";
  import catalogue_101_73   from "../../../components/Vertify/Catalogue/101/catalogue_101.73";
  import catalogue_101_73_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.73.1";
  import catalogue_101_74   from "../../../components/Vertify/Catalogue/101/catalogue_101.74";
  import catalogue_101_74_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.74.1";
  import catalogue_101_75   from "../../../components/Vertify/Catalogue/101/catalogue_101.75";
  import catalogue_101_75_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.1";
  import catalogue_101_75_2 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.2";
  import catalogue_101_75_3 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.3";
  import catalogue_101_75_4 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.4";
  import catalogue_101_75_5 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.5";
  import catalogue_101_75_6 from "../../../components/Vertify/Catalogue/101/catalogue_101.75.6";
  import catalogue_101_76   from "../../../components/Vertify/Catalogue/101/catalogue_101.76";
  import catalogue_101_76_1 from "../../../components/Vertify/Catalogue/101/catalogue_101.76.1";
  import catalogue_101_76_2 from "../../../components/Vertify/Catalogue/101/catalogue_101.76.2";
  import catalogue_101_76_3 from "../../../components/Vertify/Catalogue/101/catalogue_101.76.3";
  import catalogue_101_76_4 from "../../../components/Vertify/Catalogue/101/catalogue_101.76.4";
  import catalogue_101_76_5 from "../../../components/Vertify/Catalogue/101/catalogue_101.76.5";


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
      catalogue_0_6_1,
      catalogue_0_6_2,
      catalogue_0_8,
      catalogue_0_9,
      catalogue_0_10,
      catalogue_0_11,
      catalogue_0_12,
      catalogue_0_13,
      catalogue_0_14,
      catalogue_0_2_1,
      catalogue_0_3_1,
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
      catalogue_2_3_SR51S,
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
      catalogue_2_7_SR13S,
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
      catalogue_3_2_4_SR51S,
      catalogue_3_2_4_1,
      catalogue_3_2_4_2,
      catalogue_3_2_4_3,
      catalogue_3_2_4_4,
      catalogue_3_2_6_SR51S,
      catalogue_3_2_6_1,
      catalogue_3_2_6_2,
      catalogue_3_3_SR51S,
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
      catalogue_4_2_SR39R89S,
      catalogue_4_3,
      catalogue_4_5,
      catalogue_4_5_1,
      catalogue_4_7SR89S,
      catalogue_4_7_SR39S,
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
      catalogue_6_6_1_S458S,
      catalogue_6_6_1_1,
      catalogue_6_6_1_1_1,
      catalogue_6_6_1_1_2,
      catalogue_6_6_1_1_3,
      catalogue_6_6_3_S109S,
      catalogue_6_6_4_S109S,
      catalogue_6_6_6S109S,

      catalogue_7,
      catalogue_7_1,
      catalogue_7_2,
      catalogue_7_2_1,
      catalogue_7_2_2,
      catalogue_7_2_3,
      catalogue_7_2_3_1,
      catalogue_7_2_4,
      catalogue_7_2_5,
      catalogue_7_2_6,
      catalogue_7_3,
      catalogue_7_3_1,
      catalogue_7_3_2,

      catalogue_8,
      catalogue_8_1,
      catalogue_8_2,
      catalogue_8_2_1,
      catalogue_8_2_2,
      catalogue_8_2_3,
      catalogue_8_2_4,
      catalogue_8_3,
      catalogue_8_4,
      catalogue_8_5,
      catalogue_8_5_1,
      catalogue_8_6,
      catalogue_8_7,
      catalogue_8_7_1,
      catalogue_8_7_2,
      catalogue_8_8,
      catalogue_8_9,
      catalogue_8_10,
      catalogue_8_11,

      catalogue_9,
      catalogue_9_1,
      catalogue_9_2,
      catalogue_9_5,
      catalogue_9_5_1,
      catalogue_9_5_1_1,
      catalogue_9_5_1_2,
      catalogue_9_5_1_3,
      catalogue_9_5_1_4,
      catalogue_9_5_1_5,
      catalogue_9_5_2,
      catalogue_9_5_2_1,
      catalogue_9_5_2_2,
      catalogue_9_5_2_3,
      catalogue_9_5_3,
      catalogue_9_5_3_1,
      catalogue_9_5_3_2,
      catalogue_9_5_4,
      catalogue_9_5_4_1,
      catalogue_9_5_4_2,
      catalogue_9_9,
      catalogue_9_9_7,
      catalogue_9_10,
      catalogue_9_10_2,
      catalogue_9_10_2_1,
      catalogue_9_10_2_2,
      catalogue_9_10_2_3,
      catalogue_9_10_3,
      catalogue_9_10_3_1,
      catalogue_9_10_3_1_1,
      catalogue_9_10_3_5,
      catalogue_9_10_3_5_1,
      catalogue_9_10_3_5_2,
      catalogue_9_11,
      catalogue_9_11_1,
      catalogue_9_11_2,
      catalogue_9_11_3,
      catalogue_9_11_4,
      catalogue_9_11_5,
      catalogue_9_12,
      catalogue_9_12_4,
      catalogue_9_14,
      catalogue_9_14_1,
      catalogue_9_14_2,
      catalogue_9_14_3,
      catalogue_9_14_4,
      catalogue_9_14_5,
      catalogue_9_14_6,
      catalogue_9_14_7,
      catalogue_9_15_1,
      catalogue_9_15_2,
      catalogue_9_16,
      catalogue_9_16_1,
      catalogue_9_16_2,
      catalogue_9_17,
      catalogue_9_17_1,
      catalogue_9_17_2,
      catalogue_9_17_3,
      catalogue_9_17_4,
      catalogue_9_17_4_1,
      catalogue_9_17_4_2,
      catalogue_9_17_5,
      catalogue_9_18,
      catalogue_9_18_1,
      catalogue_9_18_2,
      catalogue_9_18_3,
      catalogue_9_18_4,
      catalogue_9_19,
      catalogue_9_19_1,
      catalogue_9_19_2,
      catalogue_9_19_0,
      catalogue_9_20,
      catalogue_9_20_1,
      catalogue_9_20_2,
      catalogue_9_20_0,
      catalogue_9_22,
      catalogue_9_22_1,
      catalogue_9_22_2,
      catalogue_9_22_0,
      catalogue_9_25,
      catalogue_9_25_1,

      catalogue_10,
      catalogue_10_1,
      catalogue_10_2,
      catalogue_10_3,
      catalogue_10_3_1,
      catalogue_10_3_2,
      catalogue_10_3_3,
      catalogue_10_3_4,
      catalogue_10_3_5,
      catalogue_10_4,
      catalogue_10_4_1,
      catalogue_10_4_2,
      catalogue_10_4_3,
      catalogue_10_4_4,
      catalogue_10_4_5,
      catalogue_10_4_6,
      catalogue_10_5,
      catalogue_10_5_1,
      catalogue_10_5_2,
      catalogue_10_5_3,
      catalogue_10_5_4,
      catalogue_10_5_5,
      catalogue_10_5_6,
      catalogue_10_6,

      catalogue_12,
      catalogue_12_2,
      catalogue_12_3,
      catalogue_12_3_1,
      catalogue_12_3_2,
      catalogue_12_3_3,
      catalogue_12_6,
      catalogue_12_6_1,
      catalogue_12_6_2,
      catalogue_12_6_3,
      catalogue_12_7,
      catalogue_12_7_1,

      catalogue_101_0,
      catalogue_101_5_1,
      catalogue_101_8_1,
      catalogue_101_40_1,
      catalogue_101_42_1,
      catalogue_101_43_1,
      catalogue_101_44_1,
      catalogue_101_46_1,
      catalogue_101_59_1,
      catalogue_101_60_1,

      catalogue_101_1,
      catalogue_101_2,
      catalogue_101_3,
      catalogue_101_4,
      catalogue_101_5,
      catalogue_101_6,
      catalogue_101_7,
      catalogue_101_8,
      catalogue_101_9,
      catalogue_101_10,
      catalogue_101_11,
      catalogue_101_12,
      catalogue_101_13,
      catalogue_101_14,
      catalogue_101_15,
      catalogue_101_16,
      catalogue_101_17,
      catalogue_101_18,
      catalogue_101_19,
      catalogue_101_20,
      catalogue_101_21,
      catalogue_101_22,
      catalogue_101_23,
      catalogue_101_24,
      catalogue_101_25,
      catalogue_101_26,
      catalogue_101_27,
      catalogue_101_28,
      catalogue_101_29,
      catalogue_101_30,
      catalogue_101_31,
      catalogue_101_32,
      catalogue_101_33,
      catalogue_101_34,
      catalogue_101_35,
      catalogue_101_36,
      catalogue_101_37,
      catalogue_101_38,
      catalogue_101_39,
      catalogue_101_40,
      catalogue_101_41,
      catalogue_101_42,
      catalogue_101_43,
      catalogue_101_44,
      catalogue_101_45,
      catalogue_101_46,
      catalogue_101_47,
      catalogue_101_48,
      catalogue_101_49,
      catalogue_101_50,
      catalogue_101_51,
      catalogue_101_52,
      catalogue_101_53,
      catalogue_101_54,
      catalogue_101_55,
      catalogue_101_56,
      catalogue_101_57,
      catalogue_101_58,
      catalogue_101_59,
      catalogue_101_60,
      catalogue_101_61,
      catalogue_101_62,
      catalogue_101_63,
      catalogue_101_64,
      catalogue_101_65,
      catalogue_101_66,
      catalogue_101_67,
      catalogue_101_68,
      catalogue_101_69,
      catalogue_101_70,
      catalogue_101_71,
      catalogue_101_72,

      catalogue_0_2_0_1,
      catalogue_0_2_0_2,
      catalogue_0_2_0_3,
      catalogue_2_3_SR51S_1,
      catalogue_9_20_1_1,
      catalogue_101_2_1,
      catalogue_101_2_2,
      catalogue_101_2_3,
      catalogue_101_5_0_1,
      catalogue_101_72_1,
      catalogue_101_72_2,

      catalogue_101_73,
      catalogue_101_73_1,
      catalogue_101_74,
      catalogue_101_74_1,
      catalogue_101_75,
      catalogue_101_75_1,
      catalogue_101_75_2,
      catalogue_101_75_3,
      catalogue_101_75_4,
      catalogue_101_75_5,
      catalogue_101_75_6,
      catalogue_101_76,
      catalogue_101_76_1,
      catalogue_101_76_2,
      catalogue_101_76_3,
      catalogue_101_76_4,
      catalogue_101_76_5,
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
        maxUniqueKey:undefined,
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
        }, {"key": "11", "value": "第十一章节"}, {"key": "12", "value": "第十二章节"}, {"key": "13", "value": "第十三章节"},
          {"key": "100", "value": "第一百章节"},{"key": "101", "value": "第一百零一章节"}]
        ,
        specialCatalogueKeys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13","100","101"],
        inputTypes: [{"key": "title", "value": "标题"}, {"key": "input", "value": "输入框"}, {
          "key": "image",
          "value": "图片"
        }],
        whichCatalogue: undefined,
        tempSectionOrder:undefined,
        relateAnnexs:[],
        relateAnnexPages:[],
        annexOrdersRelatePages:[],
        chapters:[
          {
            "key":"1",
            "annexOrders":[
              "A",
              "B",
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"A",
                "annexPages":[
                  "1"
                ]
              },
              {
                "annexOrder":"B",
                "annexPages":[
                  "1",
                  "2"
                ]
              },
              {
                "annexOrder":"C",
                "annexPages":[
                  "1"
                ]
              }
            ]
          },
          {
            "key":"2",
            "value":"第二章节",
            "annexOrders":[
              "B",
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"B",
                "annexPages":[
                  "1",
                  "2"
                ]
              },
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2"
                ]
              }
            ]
          },
          {
            "key":"3",
            "value":"第三章节"
          },
          {
            "key":"4",
            "value":"第四章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2"
                ]
              }
            ]
          },
          {
            "key":"5",
            "value":"第五章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "5",
                  "6"
                ]
              }
            ]
          },
          {
            "key":"6",
            "value":"第六章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "3",
                  "4"
                ]
              }
            ]
          },
          {
            "key":"7",
            "value":"第七章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              }
            ]
          },
          {
            "key":"8",
            "value":"第八章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                  "25",
                  "26",
                  "27",
                  "28",
                  "29",
                  "30",
                  "31",
                  "32",
                  "33",
                  "34",
                  "35",
                  "36",
                  "37",
                  "38",
                  "39"
                ]
              }
            ]
          },
          {
            "key":"9",
            "value":"第九章节",
            "annexOrders":[
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "I",
              "J"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"A",
                "annexPages":[
                  "1",
                  "2"
                ]
              },
              {
                "annexOrder":"B",
                "annexPages":[
                  "1"
                ]
              },
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4"
                ]
              },
              {
                "annexOrder":"D",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13"
                ]
              },
              {
                "annexOrder":"E",
                "annexPages":[
                  "1",
                  "2"
                ]
              },
              {
                "annexOrder":"F",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4"
                ]
              },
              {
                "annexOrder":"G",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13"
                ]
              },
              {
                "annexOrder":"H",
                "annexPages":[
                  "1",
                  "2",
                  "3"
                ]
              },
              {
                "annexOrder":"I",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9"
                ]
              },
              {
                "annexOrder":"J",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5"
                ]
              }
            ]
          },
          {
            "key":"10",
            "value":"第十章节",
            "annexOrders":[
              "A",
              "B",
              "C",
              "D"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"A",
                "annexPages":[
                  "1"
                ]
              },
              {
                "annexOrder":"B",
                "annexPages":[
                  "1",
                  "2"
                ]
              },
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13"
                ]
              },
              {
                "annexOrder":"D",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "10",
                  "11",
                  "12",
                  "13"
                ]
              }
            ]
          },
          {
            "key":"12",
            "value":"第十二章节",
            "annexOrders":[
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"C",
                "annexPages":[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5"
                ]
              }
            ]
          }
        ],
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
        form: {
          relateAnnexPages:[]
        },
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
          ],
          uniqueKey: [
            {required: true, message: "唯一编码不能为空", trigger: "blur"},
            {validator: this.checkUniqueKey, trigger: ['blur', 'keyup']}
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
      this.getList();
      this.getMaxUniqueKey();
    },
    methods: {
      getMaxUniqueKey() {
         getMaxUniqueKey().then(response => {
            if (200 == response.code) {
              this.maxUniqueKey = response.data;
            } else {
              this.$message.error(response.msg);
            }
          }
        );
      },


      changeAnnex() {
        if (false === this.form.isRelateAnnex || 'false' === this.form.isRelateAnnex) {
          this.form.relateAnnex = undefined;
          this.form.relateAnnexPages = [];
          return;
        }
        let sectionOrderName = this.form.sectionOrderName;
        if (undefined === this.form.isRelateAnnex
          || undefined === sectionOrderName) {
          return;
        }
        let array = sectionOrderName.split(".");
        let firstOrder = array[0];
        if (true === this.form.isRelateAnnex) {
          this.chapters.forEach(item => {
            if (item.key === firstOrder) {
              this.relateAnnexs = item.annexOrders;
              this.annexOrdersRelatePages = item.annexOrdersRelatePages;
              return;
            }
          })
        }
      },

      changeAnnexPage() {
        this.form.relateAnnexPages = [];
        if (undefined === this.form.isRelateAnnex
          || false === this.form.isRelateAnnex
          || 0 === this.annexOrdersRelatePages.length) {
          return;
        }
        this.annexOrdersRelatePages.forEach(item => {
          if (item.annexOrder === this.form.relateAnnex) {
            this.relateAnnexPages = item.annexPages;
            return;
          }
        })
      },

      closeDialog() {
        this.whichCatalogue = undefined;
      },

      checkUniqueKey(rule, value, callback) {
        const re = /^\d+$/;
        const rsCheck = re.test(value);
        if (!rsCheck) {
          callback(new Error('唯一编码是数字类型'));
        }
        callback();
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
        this.relateAnnexs = [];
        this.form.isRelateAnnex = false;
        this.form.relateAnnexPage = undefined;
        this.form.relateAnnex = undefined;
        this.annexOrdersRelatePages = [];
        this.relateAnnexPages = [];

        let sectionOrderName = this.form.sectionOrderName;
        if (this.specialCatalogueKeys.indexOf(sectionOrderName) > -1) {
          this.catalogues.forEach(item => {
            if (sectionOrderName == item.key) {
              this.$set(this.form, "firstOrderName", item.value);
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
        this.showPreview();
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
          showOrder:"1",
          uniqueKey:undefined,
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
        this.form.inputType = "input";
        this.form.showOrder="1";
        this.getMaxUniqueKey();
        debugger
        if (null != this.maxUniqueKey && undefined != this.maxUniqueKey) {
          this.form.uniqueKey = Number(this.maxUniqueKey) + 1;
        }
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
        this.getMaxUniqueKey();
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
        this.whichCatalogue = "catalogue_" + this.form.sectionOrderName.replace(/\./g, "_").replace(/\//g, "").replace(/\(/g, "S").replace(/\)/g, "S");
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
        this.$set(this.form, "relateAnnexPages", null != this.form.relateAnnexPage ? this.form.relateAnnexPage.split(",") : []);
        this.form.showOrder = data.showOrder + "";
        this.form.uniqueKey = data.uniqueKey;
      },

      changeTitle() {
        this.form.sectionTitle = undefined;
        if (undefined != this.$refs.cate && undefined != this.$refs.cate.$vnode) {
          let str = this.$refs.cate.$vnode.elm.innerText;
          let pos = -1 != str.indexOf("：") ? str.indexOf("：") : str.indexOf(":");
          if (pos > 0) {
            this.form.sectionTitle = str.substring(0, pos);
          } else {
            this.form.sectionTitle = str;
          }
        }
      },


      showPreview() {
        let sectionOrderName = this.form.sectionOrderName;
        if (undefined == sectionOrderName || "" == sectionOrderName) {
          return;
        }
        this.whichCatalogue = "catalogue_" + sectionOrderName.replace(/\./g, "_").replace(/\//g, "").replace(/\(/g, "S").replace(/\)/g, "S");
        this.changeTitle();
      },


      subPreview: function () {
        this.changeTitle();
      },

      assignOrderValue(sectionOrderName) {
        if (undefined == sectionOrderName) {
          return;
        }
        if (this.specialCatalogueKeys.indexOf(sectionOrderName) > -1) {
          this.form.firstOrder = sectionOrderName;
          return;
        }
        //去掉括号
        let tempSectionOrderName = sectionOrderName.replace(/\([^\)]*\)/g,"");
        let sectionOrderArray = tempSectionOrderName.split(".");
        debugger
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
        debugger
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
          obj.relateAnnexPage = undefined === this.form.relateAnnexPages || 0 === this.form.relateAnnexPages.length ? undefined : this.form.relateAnnexPages.join(","),
            obj.relateAnnex = this.form.relateAnnex,
            obj.showOrder = this.form.showOrder,
            obj.uniqueKey = this.form.uniqueKey
      },

      /** 提交按钮 */
      submitForm: function () {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != undefined) {
                this.form.relateAnnexPage = 0 === this.form.relateAnnexPages.length ? undefined : this.form.relateAnnexPages.join(","),
                update(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                  this.getMaxUniqueKey();
                } else {
                  debugger
                  this.msgError(response.msg);
                }
              });
            } else {
              let num = 1;
              this.assignOrderValue(this.form.sectionOrderName);
              let requestParam = [];
              let tmpUniqueKey;
              for (let i = 0;i < num;i++) {
                let obj = new Object();
                this.deepCopy(obj);
                obj.domId = this.form.sectionOrderName + "_" + i;
                if (i == 0) {
                  tmpUniqueKey = obj.uniqueKey;
                } else {
                  tmpUniqueKey = Number(tmpUniqueKey) + 1 + "";
                }
                obj.uniqueKey = tmpUniqueKey;
                requestParam.push(obj);
              }
              debugger
              let standardInputListJson = JSON.stringify(requestParam);
              add(standardInputListJson).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("新增成功");
                  this.open = false;
                  this.getList();
                  this.getMaxUniqueKey();
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
