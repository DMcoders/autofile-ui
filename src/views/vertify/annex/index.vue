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
            v-for="annexOrder in queryAnnexOrders"
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
          v-hasPermi="['system:dict:remove']"
        >删除
        </el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="annexList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column label="章节" align="center" prop="chapter"/>
      <el-table-column label="附录名称" align="center" prop="annexName"/>
      <el-table-column label="附录组合顺序" align="center" prop="annexOrder"  :show-overflow-tooltip="true"/>
      <el-table-column label="附录类型" align="center" prop="annexType" :show-overflow-tooltip="true"/>
      <el-table-column label="标题" align="center" prop="annexTitle"/>
      <el-table-column label="页数" align="center" prop="annexPage" :show-overflow-tooltip="true"/>
      <el-table-column label="填写角色" align="center" prop="role" :show-overflow-tooltip="true"/>
      <el-table-column label="填写类别" align="center" prop="inputType" :show-overflow-tooltip="true"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dict:edit']"
          >修改
          </el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dict:remove']"
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
    <el-dialog :title="title" :visible.sync="open" width="800px"  @close="closePreview" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="章节" prop="annexOrder">
            <el-select style="width:100%" clearable v-model="form.chapter" size="small" clearable
                       placeholder="请选择章节" @change="changeAnnexOrder" v-bind:disabled="update">
              <el-option
                v-for="chapter in chapters"
                :key="chapter.value"
                :label="chapter.value"
                :value="chapter.key"
              />
            </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="组合顺序" prop="annexOrder">
              <el-select style="width:100%" clearable v-model="form.annexOrder" size="small" clearable
                         placeholder="请选择顺序"  @change="changeAnnexPage" v-bind:disabled="update">
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
            <el-form-item label="附录页数" prop="annexPage">
              <el-select style="width:100%" clearable v-model="form.annexPage" size="small" clearable
                         placeholder="请选择顺序"  @change="changeTypeAndTitle" v-bind:disabled="update">
                <el-option
                  v-for="annexPage in annexPages"
                  :key="annexPage"
                  :label="annexPage"
                  :value="annexPage"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附录类型" prop="annexType">
              <el-input style="width:100%" v-model="form.annexType" disabled/>
            </el-form-item>
          </el-col>
        </el-row>



        <el-row>
          <el-col :span="12">
            <el-form-item label="附录标题" prop="annexTitle">
              <el-input type="textarea" style="width:100%" v-model="form.annexTitle" disabled/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="附录名称" prop="annexName">
              <el-input style="width:100%" v-model="form.annexName" clearable placeholder="附录名称"/>
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

        <el-form-item label="div预览" prop="divPreview">
        </el-form-item>
        <el-form-item  prop="divPreviewHead">
          <component v-bind:is="whichAnnexHead"></component>
        </el-form-item>
        <el-form-item  prop="divPreview">
          <component v-bind:is="whichAnnex"></component>
        </el-form-item>
        <el-form-item  prop="divPreviewTail">
          <component v-bind:is="whichAnnexTail"></component>
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

  import {add, update, getOne, list, deleteBatch} from "@/api/vertify/standardAnnex";



  import annex_1_A_1_head from '../../../components/Vertify/Annex/1/annex_A_1_head'
  import annex_1_B_1_head from '../../../components/Vertify/Annex/1/annex_B_1_head'
  import annex_1_B_2_head from '../../../components/Vertify/Annex/1/annex_B_2_head'
  import annex_1_C_1_head from '../../../components/Vertify/Annex/1/annex_C_1_head'

  import annex_2_B_1_head from "../../../components/Vertify/Annex/2/annex_B_1_head";
  import annex_2_B_2_head from "../../../components/Vertify/Annex/2/annex_B_2_head";
  import annex_2_C_1_head from "../../../components/Vertify/Annex/2/annex_C_1_head";
  import annex_2_C_2_head from "../../../components/Vertify/Annex/2/annex_C_2_head";

  import annex_3_C1_1_head from "../../../components/Vertify/Annex/3/annex_C1_1_head";
  import annex_3_C1_2_head from "../../../components/Vertify/Annex/3/annex_C1_2_head";
  import annex_3_C1_3_head from "../../../components/Vertify/Annex/3/annex_C1_3_head";
  import annex_3_C1_4_head from "../../../components/Vertify/Annex/3/annex_C1_4_head";
  import annex_3_C1_5_head from "../../../components/Vertify/Annex/3/annex_C1_5_head";
  import annex_3_C2_1_head from "../../../components/Vertify/Annex/3/annex_C2_1_head";
  import annex_3_C2_3_head from "../../../components/Vertify/Annex/3/annex_C2_3_head";
  import annex_3_C2_4_head from "../../../components/Vertify/Annex/3/annex_C2_4_head";
  import annex_3_C2_5_head from "../../../components/Vertify/Annex/3/annex_C2_5_head";
  import annex_3_C2_6_head from "../../../components/Vertify/Annex/3/annex_C2_6_head";

  import annex_4_C_1_head from "../../../components/Vertify/Annex/4/annex_C_1_head";
  import annex_4_C_2_head from "../../../components/Vertify/Annex/4/annex_C_2_head";
  import annex_4_C_1_tail from "../../../components/Vertify/Annex/4/annex_C_1_tail";

  import annex_5_C_5_head from "../../../components/Vertify/Annex/5/annex_C_5_head";
  import annex_5_C_6_head from "../../../components/Vertify/Annex/5/annex_C_6_head";
  import annex_5_C_5_tail from "../../../components/Vertify/Annex/5/annex_C_5_tail";
  import annex_5_C_6_tail from "../../../components/Vertify/Annex/5/annex_C_6_tail";

  import annex_6_C_3_head from "../../../components/Vertify/Annex/6/annex_C_3_head";
  import annex_6_C_4_head from "../../../components/Vertify/Annex/6/annex_C_4_head";
  import annex_6_C_3_tail from "../../../components/Vertify/Annex/6/annex_C_3_tail";
  import annex_6_C_4_tail from "../../../components/Vertify/Annex/6/annex_C_4_tail";


  import common_annex_A from '../../../components/Vertify/Annex/common/annex_A'
  import common_annex_B from '../../../components/Vertify/Annex/common/annex_B'
  import common_annex_C from '../../../components/Vertify/Annex/common/annex_C'

  import special_annex_2_C_2 from "../../../components/Vertify/Annex/special/special_annex_2_C_2";
  import special_annex_4_C_2 from "../../../components/Vertify/Annex/special/special_annex_4_C_2";

  export default {
    name: "annex",
    components: {
      annex_1_A_1_head,
      annex_1_B_1_head,
      annex_1_B_2_head,
      annex_1_C_1_head,

      common_annex_A,
      common_annex_B,
      common_annex_C,

      special_annex_2_C_2,
      special_annex_4_C_2,

      annex_2_B_1_head,
      annex_2_B_2_head,
      annex_2_C_1_head,
      annex_2_C_2_head,

      annex_3_C1_1_head,
      annex_3_C1_2_head,
      annex_3_C1_3_head,
      annex_3_C1_4_head,
      annex_3_C1_5_head,
      annex_3_C2_1_head,
      annex_3_C2_3_head,
      annex_3_C2_4_head,
      annex_3_C2_5_head,
      annex_3_C2_6_head,

      annex_4_C_1_head,
      annex_4_C_2_head,
      annex_4_C_1_tail,

      annex_5_C_5_head,
      annex_5_C_6_head,
      annex_5_C_5_tail,
      annex_5_C_6_tail,

      annex_6_C_3_head,
      annex_6_C_4_head,
      annex_6_C_3_tail,
      annex_6_C_4_tail,

    },
    data() {
      return {
        update: false,
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
        whichAnnexHead:undefined,
        whichAnnex:undefined,
        whichAnnexTail:undefined,
        moduleNames: [
          "制动", "安全带", "操纵件", "侧防护", "车身总布置", "挡泥板", "导流罩", "电磁兼容", "风窗", "后防护", "后牌照板", "后视镜", "空调(乘员舱加热系统)", "铭牌VIN", "前防护", "座椅", "车轮", "悬架", "转向", "发动机", "供油", "进气", "排气", "传动系", "车桥", "底盘", "总布置"
        ],
        queryAnnexOrders:['A','B','C','D'],
        annexOrders:[],
        inputTypes: [{"key": "title", "value": "标题"}, {"key": "input", "value": "输入框"}, {
          "key": "image",
          "value": "图片"
        }],
        //含有annex tail的章节目录页
        hasAnnexTail:['4_C_1','5_C_5','5_C_6','6_C_3','6_C_4'],
        //特殊的章节目录页
        isSpecialAnnex:['2_C_2','4_C_2'],
        annexOrdersRelatePages: [],
        selectAnnexOrdersRelatePages:[],
        annexOrdersRelatePage:undefined,
        annexPages:[],
        chapters: [
          {
            "key":"1",
            "value":"第一章节",
            "annexOrders":[
              "A",
              "B",
              "C"
            ],
            "annexOrdersRelatePages":[
              {
                "annexOrder":"A",
                "annexPage":"1",
                "annexTitle":"Definition of the type, variant and version of the vehicle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"B",
                "annexPage":"1",
                "annexTitle":"Drawing of a representative vehicle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"B",
                "annexPage":"2",
                "annexTitle":"Drawing of a representative vehicle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"1",
                "annexTitle":"Location of primary reference points and R-points",
                "annexType":"N721 1230/2012 E"
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
                "annexPage":"1",
                "annexTitle":"Drawing of a representative vehicle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"B",
                "annexPage":"2",
                "annexTitle":"Drawing of a representative vehicle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"1",
                "annexTitle":"Location of primary reference points and R-points",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"2",
                "annexTitle":"Table of vehicle weight",
                "annexType":"N721 1230/2012 E"
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
                "annexPage":"1",
                "annexTitle":"Speedometer (KPH)",
                "annexType":"N721 R39 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"2",
                "annexTitle":"Table for detail of engine and transmission",
                "annexType":"N721 R39 E"
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
                "annexPage":"5",
                "annexTitle":"Front axle",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"6",
                "annexTitle":"rear axle",
                "annexType":"N721 1230/2012 E"
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
                "annexPage":"3",
                "annexTitle":"Front Suspension",
                "annexType":"N721 1230/2012 E"
              },
              {
                "annexOrder":"C",
                "annexPage":"4",
                "annexTitle":"Rear Suspension",
                "annexType":"N721 1230/2012 E"
              }
            ]
          },
          {
            "key":"7",
            "value":"第七章节"
          },
          {
            "key":"8",
            "value":"第八章节"
          },
          {
            "key":"9",
            "value":"第九章节"
          },
          {
            "key":"10",
            "value":"第十章节"
          },
          {
            "key":"11",
            "value":"第十一章节"
          },
          {
            "key":"12",
            "value":"第十二章节"
          },
          {
            "key":"13",
            "value":"第十三章节"
          }
        ],

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
      this.getList();
    },
    methods: {
      closePreview() {
        this.whichAnnexHead = undefined;
        this.whichAnnex = undefined;
        this.whichAnnexTail = undefined;
      },

      subPreview: function () {
        let chapter = this.form.chapter;
        let annexOrder = this.form.annexOrder;
        let annexPage = this.form.annexPage;
        if (undefined == chapter || "" == chapter ||
          undefined == annexOrder || "" == annexOrder ||
          undefined == annexPage || "" == annexPage) {
          return;
        }
        let chapterAnnexOrderAnnexPage = chapter + "_" + annexOrder + "_" + annexPage;
        this.whichAnnexHead = "annex_" + chapterAnnexOrderAnnexPage + "_" + "head";
        if (this.isSpecialAnnex.indexOf(chapterAnnexOrderAnnexPage) > -1) {
          this.whichAnnex = 'special_annex_' + chapterAnnexOrderAnnexPage;
        } else {
          this.whichAnnex = "common_annex_" + annexOrder;
        }
        if(this.hasAnnexTail.indexOf(chapterAnnexOrderAnnexPage) > -1) {
          this.whichAnnexTail = "annex_" + chapterAnnexOrderAnnexPage + "_" + "tail";
        }
        debugger
      },



      changeAnnexOrder(data) {
        this.closePreview();
        this.form.annexOrder = undefined;
        this.form.annexPage = undefined;
        this.form.annexTitle = undefined;
        this.form.annexType = undefined;
        this.annexOrders = [];
        this.annexOrdersRelatePage = [];
        this.chapters.forEach(item => {
          if (item.key == data) {
            this.annexOrders = item.annexOrders;
            this.annexOrdersRelatePages = item.annexOrdersRelatePages;
            return;
          }
        })
      },



      changeAnnexPage(data) {
        this.closePreview();
        this.form.annexPage = undefined;
        this.form.annexTitle = undefined;
        this.form.annexType = undefined;
        this.annexPages = [];
        this.selectAnnexOrdersRelatePages = [];
        let annexOrdersRelatePages = this.annexOrdersRelatePages;
        if (undefined == data || undefined == this.annexOrdersRelatePages || 0 == annexOrdersRelatePages.length) {
          return;
        }

        annexOrdersRelatePages.forEach(item => {
          if (item.annexOrder == data) {
            this.annexPages.push(item.annexPage);
            this.selectAnnexOrdersRelatePages.push(item);
          }
        })
      },

      changeTypeAndTitle(data) {
        this.closePreview();
        this.form.annexTitle = undefined;
        this.form.annexType = undefined;
        let selectAnnexOrdersRelatePages = this.selectAnnexOrdersRelatePages;
        if (undefined == data || undefined == this.selectAnnexOrdersRelatePages || 0 == selectAnnexOrdersRelatePages.length ) {
          return
        }
        selectAnnexOrdersRelatePages.forEach(item => {
          if (item.annexPage == data) {
            this.form.annexTitle = item.annexTitle;
            this.form.annexType = item.annexType;
            return;
          }
        })
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

      /** 查询字典类型列表 */
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
          obj.annexType = item.annexType;
          this.chapters.forEach((it) => {
            if (item.chapter == it.key) {
              obj.chapter = it.value;
              return;
            }
          });
          this.annexList.push(obj);
        }
      },

      // 取消按钮
      cancel() {
        this.closePreview();
        this.open = false;
        this.update = false;
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
          role: undefined,
          inputType: undefined,
          chapter: undefined,
          annexType: undefined,
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
        this.single = selection.length != 1
        this.multiple = !selection.length
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.update = true;
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
        this.form.annexType = data.annexType;

        this.chapters.forEach((it) => {
          if (data.chapter == it.key) {
            this.$set(this.form, "chapter", it.key);
            return;
          }
        });
      },
      /** 提交按钮 */
      submitForm: function () {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != undefined) {
              debugger
              update(this.form).then(response => {
                if (response.code === 200) {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.update = false;
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
                  this.update = false;
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
        }).then(function () {
          return exportType(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function () {
        });
      }
    }
  };
</script>
