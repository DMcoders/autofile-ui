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
              @click="handleWin(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>


    <el-dialog :title="winTitle" :visible.sync="openWin" width="80%" fullscreen>
      <div v-for="(item, i) in writeMainDetail">
        <el-row v-if="item.inputType==='title'" style="font-weight: bold" type="flex" align="middle">
          <el-col :span="4">
            {{item.sectionOrderName}}
          </el-col>
          <el-col :span="20">
            {{item.sectionTitle}}
          </el-col>
        </el-row>
        <el-row v-else-if="item.inputType==='input'" type="flex" align="middle">
          <el-col :span="4">
            {{item.sectionOrderName}}
          </el-col>
          <el-col :span="10">
            {{item.sectionTitle}}
          </el-col>
          <el-col :span="10">
            <el-input  size="small" style="width:80%" v-model="item.inputContent" :disabled="isOnlyRead"></el-input>
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
        <el-row style="margin-top:10px">
          <el-col :span="24">
              <el-upload
                :disabled="isOnlyRead"
                action=""
                list-type="picture-card"
                :on-change="(file,fileList) => {return beforeAvatarUpload(file,fileList,item.id)}"
                multiple
                :auto-upload="false"
                :file-list="item.files"
                :on-preview="handlePictureCardPreview"
                :on-remove="(file,fileList) => {return handleRemovePicture(file,fileList,item.id)}"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible" append-to-body>
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div v-if="!isOnlyRead" slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">确 定</el-button>
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
          <el-col :span="3">
            {{item.sectionOrderName}}
          </el-col>
          <el-col :span="19">
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
          <el-col :span="2">
            {{item.sectionOrderName}}
          </el-col>
          <el-col :span="9">
            {{item.sectionTitle}}
          </el-col>
          <el-col :span="10">
            <el-input  size="small" style="width:80%" v-model="item.inputContent" :disabled="true"></el-input>
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
            <el-upload
              action=""
              :disabled="true"
              list-type="picture-card"
              :on-change="(file,fileList) => {return beforeAvatarUpload(file,fileList,item.id)}"
              multiple
              :auto-upload="false"
              :file-list="item.files"
              :on-preview="handlePictureCardPreview"
              :on-remove="(file,fileList) => {return handleRemovePicture(file,fileList,item.id)}"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" append-to-body>
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="reviewSubmit">确 定</el-button>
        <el-button @click="reviewCancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup';
import { getUserProfile } from "@/api/system/user";
import {homePageWrite,homePageReview,homePageModify,homePageFinish,
  getReviewDetail,getModifyDetail,getWriteDetail,getFinishDetail,
  sumbitWriteTextDetail,sumbitWriteAnnexDetail,submitReviewDetail} from "@/api/vertify/certification";


export default {
  name: 'Index',
  components: {
    PanelGroup,
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
      roles:[103],
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
      isOnlyRead:false
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
        // this.roles = roles;
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
      var params = {};
      params.roles = this.roles;
      params.certificationId =item.certificationId;
      params.standardFileId =item.standardFileId;
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
        })
      }

    },
    cancel() {
      this.openWin = false;
      this.writeMainDetail= [];
      this.writeAnnexDetail= [];
      this.dialogImageUrl= '';
      this.dialogVisible= false;
    },
    reviewCancel() {
      this.openReviewWin = false;
      this.reviewMainDetail= [];
      this.reviewAnnexDetail= [];
      this.dialogImageUrl= '';
      this.dialogVisible= false;
    },
    submit() {
      if(this.type == "write" || this.type == "noPass") {
        let data1 = new FormData();
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
        data1.append("certificationFileInputListJson",JSON.stringify(this.writeMainDetail));

        this.writeAnnexDetail.forEach(item => {
          if(item.fileList==undefined || item.fileList.length==0) {
            flag = true;
          }else {
            let data3 = new FormData();
            item.fileList.forEach(file => {
              data3.append("files",file.raw);
            })
            item.files = data3;
            item.employeeName = this.user.userName;
            item.employeeNumber = this.user.userId;
            item.reviewState = '提交';
            item.isLink = 0;
            delete item['fileList'];
          }
        })
        if(flag) {
          this.$message.error("请上传全部图片再提交！");
          return false;
        }

        sumbitWriteTextDetail(data1).then(response => {
          if (200 == response.code) {
            for(var i=0;i<this.writeAnnexDetail.length;i++) {
              let tmp = this.writeAnnexDetail[i].files;
              tmp.append("certificationAnnexInputJson",JSON.stringify(this.writeAnnexDetail[i]));
              sumbitWriteAnnexDetail(tmp).then(response => {
                if (200 == response.code) {
                } else {
                  this.$message.error(response.msg);
                }
              })
            }
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
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeAvatarUpload(file,fileList,id) {
      const isLt2M = file.size < 1024 * 1024 * 2;
      debugger
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
        this.writeAnnexDetail.forEach(item => {
          if(item.id==id) {
            if(item.fileList) {
              item.fileList.forEach((fileItem, index) => {
                if (fileItem.uid == file.uid) {
                  item.fileList.splice(index, 1)
                }
              })
            }else {
              item.fileList = fileList;
              item.fileList.splice(0,1)
            }
          }
        })
        return false;
      }
      let ff = file.raw;
      const isImage = ff.type == 'image/png' || ff.type == 'image/jpg' || ff.type == 'image/jpeg' || ff.type == 'image/bmp' || ff.type == 'image/gif' || ff.type == 'image/webp';
      if (!isImage) {
        this.$message.error('上传只能是png,jpg,jpeg,bmp,gif,webp格式!');
        this.writeAnnexDetail.forEach(item => {
          if(item.id==id) {
            if(item.fileList) {
              item.fileList.forEach((fileItem, index) => {
                if (fileItem.uid == file.uid) {
                  item.fileList.splice(index, 1)
                }
              })
            }else {
              item.fileList = fileList;
              item.fileList.splice(0,1)
            }
          }
        })
        return false;
      }

      this.writeAnnexDetail.forEach(item => {
        if(item.id === id) {
          item.fileList = fileList;
        }
      })
    },
    handleRemovePicture(file, fileList ,id) {
      debugger
      this.writeAnnexDetail.forEach(item => {
        if(item.id === id) {
          item.fileList = fileList;
        }
      })
    },
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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
