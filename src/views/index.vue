<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetTableData="handleSetTableData" :writeNum="writeData.length" :auditNum="auditData.length" :noPassNum="noPassData.length" :passNum="passData.length"/>

    <el-row style="background:#fff;margin-bottom:32px;">
      <el-table
        v-show="type==='write'"
        :data="writeData"
        style="width: 100%">
        <el-table-column
          label="名称"
          align="center"
          prop="certificationName"
          min-width="20%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="车系"
          align="center"
          prop="autoSeries"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationAutoSeries }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="出口地"
          align="center"
          prop="exportCountry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exportCountry }}</span>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="fileName"-->
          <!--label="文件名"-->
          <!--align="center"-->
          <!--min-width="20%">-->
        <!--</el-table-column>-->
        <el-table-column
          label="创建日期"
          align="center"
          prop="certificationDate"
          min-width="15%">
          <template slot-scope="scope">
            {{parseTime(scope.row.certificationDate,'{y}-{m}-{d}')}}
          </template>
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleWin(scope.row)">填写</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-show="type==='audit'"
        :data="auditData"
        style="width: 100%">
        <el-table-column
          label="名称"
          align="center"
          prop="certificationName"
          min-width="20%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="车系"
          prop="autoSeries"
          align="center"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationAutoSeries }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="出口地"
          align="center"
          prop="exportCountry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exportCountry }}</span>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="fileName"-->
          <!--label="文件名"-->
          <!--align="center"-->
          <!--min-width="20%">-->
        <!--</el-table-column>-->
        <el-table-column
          label="填写进度"
          align="center"
          prop="process"
          min-width="15%">
          <template slot-scope="scope">
            <el-progress v-if="scope.row.process===100" :text-inside="true" :stroke-width="22" :percentage="100" status="success"></el-progress>
            <el-progress v-else :text-inside="true" :stroke-width="22" :percentage="scope.row.process" status="warning"></el-progress>
          </template>
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleWin(scope.row)">审核</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-show="type==='noPass'"
        :data="noPassData"
        style="width: 100%">
        <el-table-column
          label="名称"
          align="center"
          prop="certificationName"
          min-width="20%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="车系"
          align="center"
          prop="autoSeries"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationAutoSeries }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="出口地"
          align="center"
          prop="exportCountry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exportCountry }}</span>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="fileName"-->
          <!--label="文件名"-->
          <!--align="center"-->
          <!--min-width="20%">-->
        <!--</el-table-column>-->
        <el-table-column
          label="审核意见"
          align="center"
          prop="auditOpinion"
          min-width="15%">
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleWin(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-show="type==='pass'"
        :data="passData"
        style="width: 100%">
        <el-table-column
          label="名称"
          align="center"
          prop="certificationName"
          min-width="20%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="车系"
          align="center"
          prop="autoSeries"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.certificationAutoSeries }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="出口地"
          align="center"
          prop="exportCountry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exportCountry }}</span>
          </template>
        </el-table-column>
        <!--<el-table-column-->
          <!--prop="fileName"-->
          <!--label="文件名"-->
          <!--align="center"-->
          <!--min-width="20%">-->
        <!--</el-table-column>-->
        <el-table-column
          label="完成时间"
          prop="finishDate"
          align="center"
          min-width="15%">
          <template slot-scope="scope">
            {{parseTime(scope.row.finishDate,'{y}-{m}-{d}')}}
          </template>
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleWin(scope.row)">详情</el-button>
            <el-button
              size="mini"
              type="success"
              @click="openFileExportList(scope.row)">文件导出</el-button>
          </template>

        </el-table-column>
      </el-table>
    </el-row>


    <el-dialog :title="winTitle" :visible.sync="openWin" width="80%" fullscreen @close="cancel">
      <el-row>
        <el-col :span="4" :offset="20">
          <el-select v-if="!isOnlyRead" style="width:90%" v-model="selCertificationId" placeholder="历史认证" filterable @change="selCertification">
            <el-option
              v-for="item in writedCertifications"
              :key="item.id"
              :label="item.certificationName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div v-for="(item, i) in writeMainDetail">
        <el-row v-if="item.inputType==='title'" style="font-weight: bold" type="flex" align="middle">
          <el-col :span="5">
            {{item.sectionOrderName}}<br><br>
            {{item.sectionTitleZh}}<br><br>
            {{item.sectionTitle}}
          </el-col>
          <el-col :span="19">
          </el-col>
        </el-row>
        <el-row v-else type="flex" align="middle">
          <el-col :span="5">
            {{item.sectionOrderName}}<br><br><br>
            {{item.sectionTitleZh}}<br><br><br>
            {{item.sectionTitle}}
          </el-col>
          <el-col v-if="!isOnlyRead" :span="9">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="isOnlyRead" @input="(res)=> item.inputContent = res" ></editor-vue>
          </el-col>
          <el-col v-if="!isOnlyRead" :span="1" style="text-align: center">
            <i class="el-icon-back link" v-model="item.historyInput" style="font-size: 18px;" @click="v => fileInputFill(v,i)"></i>
          </el-col>
          <el-col v-if="!isOnlyRead" :span="9">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.historyInput" :disabled="true"></editor-vue>
          </el-col>
          <el-col v-else :span="19">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="isOnlyRead"></editor-vue>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div v-for="(item, i) in writeAnnexDetail">
        <el-row style="font-size:18px">
          <el-col :span="24">
            <el-row>
              <el-col :span="4" style="border:1px solid;border-color:black">
                Type:
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black">
                {{item.annexType}}
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black" align="middle">
                Annex {{item.annexOrder}} Page {{item.annexPage}}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="border-right:1px solid;border-left:1px solid;border-bottom:1px solid;border-color:black">
                Title:
              </el-col>
              <el-col :span="20" style="border-right:1px solid;border-bottom:1px solid;border-color:black">
                {{item.annexTitle}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top:10px" type="flex" align="middle">
          <el-col v-if="!isOnlyRead" :span="11">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="isOnlyRead" @input="(res)=> item.inputContent = res" ></editor-vue>
          </el-col>
          <el-col v-if="!isOnlyRead" :span="2" style="text-align: center;">
            <i class="el-icon-back link" v-model="item.historyInput" style="font-size: 18px;" @click="v => annexInputFill(v,i)"></i>
          </el-col>
          <el-col v-if="!isOnlyRead" :span="11">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.historyInput" :disabled="true"></editor-vue>
          </el-col>
          <el-col v-else :span="24">
            <editor-vue v-if="openWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="isOnlyRead"></editor-vue>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div v-if="!isOnlyRead" slot="footer" class="dialog-footer">
        <el-button type="success" @click="allFill">全部填充</el-button>
        <el-button type="warning" @click="save">暂 存</el-button>
        <el-button type="primary" @click="submit">提 交</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="winTitle" :visible.sync="openReviewWin" width="80%" fullscreen>
      <div v-for="(item, i) in reviewMainDetail">
        <el-row v-if="item.inputType==='title'" style="font-weight: bold" type="flex" align="middle">
          <el-col :span="2">
            <el-switch
              class="switchStyle"
              :width="70"
              v-model="item.reviewState"
              active-color="#00A854"
              active-text="通过"
              active-value="通过"
              inactive-color="#F04134"
              inactive-text="未通过"
              inactive-value="未通过">
            </el-switch>
          </el-col>
          <el-col :span="8">
            {{item.sectionTitleZh}}
          </el-col>
          <el-col :span="14">
            {{item.sectionTitle}}
          </el-col>
        </el-row>
        <el-row v-else-if="item.inputType==='input'" type="flex" align="middle">
          <el-col :span="3">
            <el-switch
              class="switchStyle"
              :width="70"
              v-model="item.reviewState"
              active-color="#00A854"
              active-text="通过"
              active-value="通过"
              inactive-color="#F04134"
              inactive-text="未通过"
              inactive-value="未通过">
            </el-switch>
          </el-col>
          <el-col :span="7">
            {{item.sectionOrderName}}<br><br><br>
            {{item.sectionTitleZh}}<br><br><br>
            {{item.sectionTitle}}
          </el-col>
          <el-col :span="14">
            <editor-vue v-if="openReviewWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="true" ></editor-vue>
          </el-col>
        </el-row>
        <el-row style="margin-top:10px;">
          <el-col :span="24">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="审核意见"
              v-model="item.auditOpinion">
            </el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div v-for="(item, i) in reviewAnnexDetail">
        <el-row style="font-size:18px">
          <el-col :span="3">
            <el-switch
              class="switchStyle"
              v-model="item.reviewState"
              :width="70"
              active-color="#00A854"
              active-text="通过"
              active-value="通过"
              inactive-color="#F04134"
              inactive-text="未通过"
              inactive-value="未通过">
            </el-switch>
          </el-col>
          <el-col :span="21">
            <el-row>
              <el-col :span="4" style="border:1px solid;border-color:black">
                Type:
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black">
                {{item.annexType}}
              </el-col>
              <el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black" align="middle">
                Annex {{item.annexOrder}} Page {{item.annexPage}}
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="border-right:1px solid;border-left:1px solid;border-bottom:1px solid;border-color:black">
                Title:
              </el-col>
              <el-col :span="20" style="border-right:1px solid;border-bottom:1px solid;border-color:black">
                {{item.annexTitle}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top:10px">
          <el-col :span="24">
            <editor-vue v-if="openReviewWin" class="editor" style="width:100%" :value="item.inputContent" :disabled="true" ></editor-vue>
          </el-col>
        </el-row>
        <el-row style="margin-top:10px;">
          <el-col :span="24">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="审核意见"
              v-model="item.auditOpinion">
            </el-input>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="reviewSubmit">确 定</el-button>
        <el-button @click="reviewCancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="文件导出列表" :visible.sync="openFileExportWin" width="80%" fullscreen @close='closeFileExportDialog'>
      <el-table
        :data="certificationFiles"
        style="width: 100%">
        <el-table-column
          label="文件名"
          align="center"
          prop="certificationName"
          min-width="20%">
          <template slot-scope="scope">
            <span style="color:#ffba00">{{ scope.row.fileName }}</span>
          </template>
        </el-table-column>

        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="exportFile(scope.row)">导出</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup';
import { getUserProfile } from "@/api/system/user";
import {homePageWrite,homePageReview,homePageModify,homePageFinish,
  getReviewDetail,getModifyDetail,getWriteDetail,getFinishDetail,getCertificationFilesByCertificationId,
  sumbitWriteTextDetail,sumbitWriteAnnexDetail,submitReviewDetail,getWritedCertifications,getWritedInputs} from "@/api/vertify/certification";

import editorVue from "@/components/Tinymce";
import ElButton from "element-ui/packages/button/src/button";
import {nodeServiceUrl} from "../api/vertify/certification";


export default {
  name: 'Index',
  components: {
    ElButton,
    PanelGroup,editorVue
  },
  created() {
    this.getUser();
    this.openLoading();
  },
  data() {
    return {
      // 加载层信息
      loading: [],
      openWin:false,
      openReviewWin:false,
      openFileExportWin:false,
      roles:[],
      winTitle:'',
      type:"write",
      writeData: [],
      writeMainDetail: [],
      writeAnnexDetail: [],
      auditData: [],
      reviewMainDetail:[],
      reviewAnnexDetail:[],
      noPassData: [],
      passData: [],
      dialogImageUrl: '',
      dialogVisible: false,
      isOnlyRead:false,
      writedCertifications:[],
      selCertificationId:"",
      certificationFiles:[]
    }
  },
  methods: {
    // 打开加载层
    openLoading() {
      this.loading = this.$loading({
        lock: true,
        text: "拼命读取中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },

    getUser() {
      getUserProfile().then(response => {
        this.user = response.data;
        let roles = [];
        response.data.roles.forEach(item => {
          roles.push(item.roleId)
        })
        this.roles = roles;
      }).then(response => {
          this.homePageWrite();
          this.homePageReview();
          this.homePageModify();
          this.homePageFinish();
        }
      ).then(response => {
          this.loading.close();
      })
    },
    handleSetTableData(type) {
      this.type = type;
      if(type == 'write') {
        this.homePageWrite();
      }else if(type == 'audit') {
        this.homePageReview();
      }else if(type == 'noPass') {
        this.homePageModify();
      }else if(type == 'pass') {
        this.homePageFinish();
      }
    },
    homePageWrite() {
      homePageWrite(this.roles).then(response => {
        if (200 == response.code) {
            this.writeData = response.data.certificationFileInfoList;
        } else {
          this.$message.error(response.msg);
        }
      })
    },
    homePageReview() {
      homePageReview().then(response => {
        if (200 == response.code) {
          this.auditData = response.data.certificationFileInfoList;;
        } else {
          this.$message.error(response.msg);
        }
      })
    },
    homePageModify() {
      homePageModify(this.roles).then(response => {
        if (200 == response.code) {
          this.noPassData = response.data.certificationFileInfoList;
        } else {
          this.$message.error(response.msg);
        }
      })
    },
    homePageFinish() {
      homePageFinish().then(response => {
        if (200 == response.code) {
          this.passData = response.data.certificationFileInfoList;
        } else {
          this.$message.error(response.msg);
        }
      })
    },

    handleWin(item) {
      this.openLoading();
      var params = {};
      params.roles = this.roles;
      params.certificationId =item.certificationId;
      params.standardFileId =item.standardFileId;
      this.isOnlyRead = false;
      if(this.type === 'write') {
        this.winTitle = '待填写';
          getWriteDetail(params).then(response => {
            if (200 == response.code) {
              this.writeMainDetail = response.data.certificationFileInfos;
              this.writeAnnexDetail = response.data.certificationAnnexInputs;
              this.openWin = true;
            } else {
              this.$message.error(response.msg);
            }
          }).then(response => {
            this.loading.close();
          });
        var params2 = {};
        params2.roles = this.roles;
        params2.certificationAutoType = item.certificationAutoType;
        params2.exportCountry = item.exportCountry;
        getWritedCertifications(params2).then(response => {
          if (200 == response.code) {
            this.writedCertifications = response.data.writedCertifications;
          } else {
            this.$message.error(response.msg);
          }
        })

      }else if(this.type === 'audit') {
        this.winTitle = '待审核';
        getReviewDetail(params).then(response => {
          if (200 == response.code) {
            this.reviewMainDetail = response.data.certificationFileInfos;
            this.reviewAnnexDetail = response.data.certificationAnnexInputs;
            this.openReviewWin = true;
          } else {
            this.$message.error(response.msg);
          }
        }).then(response => {
          this.loading.close();
        })

      }else if(this.type === 'noPass') {
        this.winTitle = '待修改';
        getModifyDetail(params).then(response => {
          if (200 == response.code) {
            this.writeMainDetail = response.data.certificationFileInfos;
            this.writeAnnexDetail = response.data.certificationAnnexInputs;
            this.openWin = true;
          } else {
            this.$message.error(response.msg);
          }
        }).then(response => {
          this.loading.close();
        })
        var params2 = {};
        params2.roles = this.roles;
        params2.certificationAutoType = item.certificationAutoType;
        params2.exportCountry = item.exportCountry;
        getWritedCertifications(params2).then(response => {
          if (200 == response.code) {
            this.writedCertifications = response.data.writedCertifications;
          } else {
            this.$message.error(response.msg);
          }
        })
      }else if(this.type === 'pass') {
        this.winTitle = '已通过';
        this.isOnlyRead = true;
        getFinishDetail(params).then(response => {
          if (200 == response.code) {
            this.writeMainDetail = response.data.certificationFileInfos;
            this.writeAnnexDetail = response.data.certificationAnnexInputs;
            this.openWin = true;
          } else {
            this.$message.error(response.msg);
          }
        }).then(response => {
          this.loading.close();
        })
      }

    },
    cancel() {
      this.openWin = false;
      this.writeMainDetail= [];
      this.writeAnnexDetail= [];
      this.dialogImageUrl= '';
      this.dialogVisible= false;
      this.selCertificationId= '';
    },
    reviewCancel() {
      this.openReviewWin = false;
      this.reviewMainDetail= [];
      this.reviewAnnexDetail= [];
      this.dialogImageUrl= '';
      this.dialogVisible= false;
    },
    save() {
      debugger
      let data = new FormData();
      this.writeMainDetail.forEach(item => {
          item.employeeName = this.user.userName;
          item.employeeNumber = this.user.userId;
          item.isLink = 0;
      })
      data.append("certificationFileInputListJson",JSON.stringify(this.writeMainDetail));
      this.writeAnnexDetail.forEach(item => {
          item.employeeName = this.user.userName;
          item.employeeNumber = this.user.userId;
          item.isLink = 0;
      })
      data.append("certificationAnnexInputListJson",JSON.stringify(this.writeAnnexDetail));
      sumbitWriteTextDetail(data).then(response => {
        if (200 == response.code) {
          this.cancel();
          this.msgSuccess("保存成功");
          this.homePageWrite();
          this.homePageReview();
          this.homePageModify();
          this.homePageReview();
        }else {
          this.$message.error(response.msg);
        }
      })
    },
    submit() {
      if(this.type == "write" || this.type == "noPass") {
        let data = new FormData();
        let flag = false;
        this.writeMainDetail.forEach(item => {
          if(item.inputContent==undefined || item.inputContent=="") {
            flag = true;
          }
          item.employeeName = this.user.userName;
          item.employeeNumber = this.user.userId;
          item.reviewState = '提交';
          item.isLink = 0;
        })
        if(flag) {
          this.$message.error("请填写完全部内容再提交！");
          return false;
        }
        data.append("certificationFileInputListJson",JSON.stringify(this.writeMainDetail));

        this.writeAnnexDetail.forEach(item => {
          if(item.inputType!='title') {
            if(item.inputContent==undefined || item.inputContent=="") {
              flag = true;
            }else {
              item.employeeName = this.user.userName;
              item.employeeNumber = this.user.userId;
              item.reviewState = '提交';
              item.isLink = 0;
            }
          }
        })
        if(flag) {
          this.$message.error("请填写完全部内容再提交！");
          return false;
        }
        data.append("certificationAnnexInputListJson",JSON.stringify(this.writeAnnexDetail));
        sumbitWriteTextDetail(data).then(response => {
          if (200 == response.code) {
            this.cancel();
            this.msgSuccess("提交成功");
            this.homePageWrite();
            this.homePageReview();
            this.homePageModify();
            this.homePageReview();
          }else {

            this.$message.error(response.msg);
          }
        })
      }
    },
    reviewSubmit() {
      let data = new FormData();
      this.reviewMainDetail.forEach(item => {
        item.auditEmployeeName = this.user.userName;
        item.auditEmployeeNumber = this.user.userId;
      })
      this.reviewAnnexDetail.forEach(item => {
        item.auditEmployeeName = this.user.userName;
        item.auditEmployeeNumber = this.user.userId;
      })
      data.append("certificationFileInputListJson",JSON.stringify(this.reviewMainDetail));
      data.append("certificationAnnexInputListJson",JSON.stringify(this.reviewAnnexDetail));

      submitReviewDetail(data).then(response => {
        if (200 == response.code) {
          this.reviewCancel();
          this.msgSuccess("提交成功");
          this.homePageWrite();
          this.homePageReview();
          this.homePageModify();
          this.homePageReview();
        }else {

          this.$message.error(response.msg);
        }
      })

    },
    selCertification(value) {
      var params = {};
      params.roles = this.roles;
      params.certificationId = value;
      getWritedInputs(params).then(response => {
        if (200 == response.code) {
          let writedInputs = response.data.writedFileInputs;
          this.writeMainDetail.forEach(item => {
            item.historyInput = '';
            writedInputs.forEach(writedInput => {
              if(writedInput.domId === item.domId) {
                item.historyInput = writedInput.inputContent;
              }
            })
          })

          writedInputs = response.data.writedAnnexInputs;
          this.writeAnnexDetail.forEach(item => {
            item.historyInput = '';
            writedInputs.forEach(writedInput => {
              if(writedInput.domId === item.domId) {
                item.historyInput = writedInput.inputContent;
              }
            })
          })
        } else {
          this.$message.error(response.msg);
        }
      })
    },
    allFill() {
      this.writeMainDetail.forEach(item => {
        item.inputContent = item.historyInput;
      })
      this.writeAnnexDetail.forEach(item => {
        item.inputContent = item.historyInput;
      })
    },
    fileInputFill(value,index) {
      this.writeMainDetail[index].inputContent = this.writeMainDetail[index].historyInput;
    },
    annexInputFill(value,index) {
      this.writeAnnexDetail[index].inputContent = this.writeAnnexDetail[index].historyInput;
    },
    openFileExportList(item) {
      this.openFileExportWin = true;
      getCertificationFilesByCertificationId(item.certificationId).then(response => {
        if (200 == response.code) {
          this.certificationFiles = response.data.certificationFiles;
        } else {
          this.$message.error(response.msg);
        }
      })
    },
    closeFileExportDialog() {
      this.certificationFiles=[];
    },
    exportFile(row) {
      if (undefined == this.user
        || null == this.user
        || (true != this.user.admin && 'true' != this.user.admin)) {
        this.$message({
          message: '非管理员不能使用！',
          type: 'error'
        });
        return;
      }
      let certificationId = row.certificationId;
      let standardFileId = row.standardFileId;
      if ((undefined == certificationId || null == certificationId || "" == certificationId)
        && (undefined == standardFileId || null == standardFileId || "" == standardFileId)) {
        this.$message({
          message: '未获取到认证id或文件id',
          type: 'error'
        });
        return;
      }
      this.loading = this.$loading({
        lock: true,
        text: "正在导出中，请耐心等待",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let url = nodeServiceUrl + "/export?certificationId=" + certificationId + "&standardFileId=" + standardFileId;
      this.$http.get(url, {
        responseType: 'blob'
      }).then(function (response) {
        debugger
        var blob = new Blob([response.data], {type: 'Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
        var downloadElement = document.createElement('a');
        var href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.href = href;
        downloadElement.download = row.fileName + '.docx'; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
        this.loading.close();
      }, function (response) {
        this.loading.close();
        this.$message({
          message: '导出失败，请稍后再试！',
          type: 'error'
        });
      });
    }
  }
}
</script>

<style lang="scss">
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

.el-dialog.is-fullscreen {
  margin-top: 0vh !important;
}
.switchStyle{
  .el-switch__label {
    position: absolute;
    display: none;
    font-weight:normal;
  }
  .el-switch__label *{
    font-size:12px;
  }
  .el-switch__label--left {
    z-index: 9;
    left:24px;
    color: #000;
  }
  .el-switch__label--right {
    z-index: 9;
    color: #fff;
  }
  .el-switch__label.is-active {
    display: block;
    height:30px;
    line-height:30px;
  }
}

.el-switch,.el-switch__core{
  height:30px;
  line-height:30px;
}
.el-switch__core{
  border-radius:15px;
  &:after{
    width:20px;
    height:20px;
    top:4px;
    left:3px;
    z-index:10;
  }
}
.el-switch.is-checked .el-switch__core::after{
  margin-left:-23px;
}

.link:hover {
  cursor: pointer;
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
