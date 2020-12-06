<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetTableData="handleSetTableData" />

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
            <span style="color:#ffba00">{{ scope.row.autoSeries }}</span>
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
        <el-table-column
          prop="fileName"
          label="文件名"
          align="center"
          min-width="20%">
        </el-table-column>
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
              @click="handleWin('write',scope.row)">填写</el-button>
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
            <span style="color:#ffba00">{{ scope.row.autoSeries }}</span>
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
        <el-table-column
          prop="fileName"
          label="文件名"
          align="center"
          min-width="20%">
        </el-table-column>
        <el-table-column
          label="填写进度"
          align="center"
          prop="process"
          min-width="15%">
          <template slot-scope="scope">
            <el-progress v-if="scope.row.process==100" :text-inside="true" :stroke-width="22" :percentage="scope.row.process" status="success"></el-progress>
            <el-progress v-else :text-inside="true" :stroke-width="22" :percentage="scope.row.process" status="warning"></el-progress>
          </template>
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleWin('audit',scope.row)">审核</el-button>
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
            <span style="color:#ffba00">{{ scope.row.autoSeries }}</span>
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
        <el-table-column
          prop="fileName"
          label="文件名"
          align="center"
          min-width="20%">
        </el-table-column>
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
              @click="handleWin('update',scope.row)">修改</el-button>
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
            <span style="color:#ffba00">{{ scope.row.autoSeries }}</span>
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
        <el-table-column
          prop="fileName"
          label="文件名"
          align="center"
          min-width="20%">
        </el-table-column>
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
              type="success"
              @click="handleWin('detail',scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>


    <el-dialog :visible.sync="openWin" width="80%" append-to-body fullscreen>
      <div style="margin-top:24px"></div>
      <!--<div v-for="(item, i) in annexListData">-->
        <!--<el-row style="font-size:18px">-->
          <!--<el-col :span="3">-->
            <!--{{item.orderName}}-->
          <!--</el-col>-->
          <!--<el-col :span="17">-->
            <!--<el-row>-->
              <!--<el-col :span="4" style="border:1px solid;border-color:black">-->
                <!--Type:-->
              <!--</el-col>-->
              <!--<el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black">-->
                <!--{{item.type}}-->
              <!--</el-col>-->
              <!--<el-col :span="10" style="border-right:1px solid;border-top:1px solid;border-bottom:1px solid;border-color:black" align="middle">-->
                <!--Annex {{item.annex}} Page {{item.annexPage}}-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
              <!--<el-col :span="4" style="border-right:1px solid;border-left:1px solid;border-bottom:1px solid;border-color:black">-->
                <!--Title:-->
              <!--</el-col>-->
              <!--<el-col :span="20" style="border-right:1px solid;border-bottom:1px solid;border-color:black">-->
                <!--{{item.title}}-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--</el-col>-->
          <!--<el-col :span="4" type="flex" align="middle">-->
            <!--<el-tag-->
              <!--type="warning"-->
              <!--disable-transitions>{{item.role}}</el-tag>-->
          <!--</el-col>-->
        <!--</el-row>-->

        <!--<el-divider></el-divider>-->
      <!--</div>-->
    </el-dialog>

  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup';
import { getUserProfile } from "@/api/system/user";
import {homePageWrite,homePageReview,homePageModify,homePageFinish} from "@/api/vertify/certification";


export default {
  name: 'Index',
  components: {
    PanelGroup,
  },
  created() {
    this.getUser();
  },
  data() {
    return {
      openWin:false,
      roles:[],
      type:"write",
      writeData: [],
      auditData: [],
      noPassData: [],
      passData: [],
    }
  },
  methods: {
    getUser() {
      getUserProfile().then(response => {
        this.user = response.data;
        let roles = [];
        response.data.roles.forEach(item => {
          roles.push(item.roleId)
        })
        this.roles = roles;
      });
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
          let auditData = response.data.certificationFileInfoList;
          auditData.forEach(item => {
            item.process = item.finishInput*100/item.totoalInput;
          })
          this.auditData = auditData;
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

    handleWin(type,item) {
      this.openWin = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

  .el-dialog.is-fullscreen {
    margin-top: 0vh !important;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
