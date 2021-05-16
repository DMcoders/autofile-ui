<template>
  <div class="app-container">
    <el-container>
      <!--左侧-->
      <el-aside width="30%" style="background-color: #FFFFFF">
        <Tree :data="vehicleTreeData" :render="renderContent" class="demo-tree-render" ref="tree" @on-select-change="selectChange()"></Tree>

      </el-aside>
      <!--主题-->
      <el-main>
        <el-row>
          <el-col :span="20" class="text-center">
            <el-input
              id="keyWordInput"
              v-model="keyWord"
              style="width: 100%;"
              placeholder="模糊搜索"
              clearable
              size="medium"
              prefix-icon="el-icon-search"
              @keyup.enter.native="handleQuery"
            />
          </el-col>
          <el-col :span="4">
            <el-button
              style="height:36px"
              type="primary"
              size="medium"
              @click="uploadFile"
              v-hasPermi="['system:config:add']"
            >上传
            </el-button>
          </el-col>
        </el-row>

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="valid" label="有效">
            <el-row>
              <el-button type="primary" size="mini"  @click="updateTagsStatus" style="float: right;margin-bottom: 10px;margin-left:10px;">{{tagsLabel}}</el-button>
              <el-button type="primary" size="mini"  @click="batchDownLoad" style="float: right;margin-bottom: 10px;">批量下载</el-button>
            </el-row>
            <el-row>
              <el-checkbox-group v-model="checkList">
              <el-col :span="8" class="card-box" v-for="(item,index) in filterValidList">

                <el-card>
                  <div slot="header" class="clearfix">
                    <el-checkbox :label="item.fileUrl" :key="item.fileUrl"><span style="font-weight: bold;white-space: normal;word-break: break-all;">{{item.fileName}}</span></el-checkbox>
                    <span style="font-weight: bold;white-space: normal;word-break: break-all;">{{item.fileName}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                      <a :href="item.fileUrl" target="_blank"><i style="color:green">下载</i></a>&nbsp
                      <i style="color:green" @click="updateLabel(item)">标签</i>&nbsp
                      <i style="color:green" @click="fileExpire(item)">过期</i>&nbsp
                      <i style="color:red" @click="fileDelete(item)">删除</i>
                    </el-button>
                  </div>
                  <div>
                    <el-row v-if="tagsLabel=='展开标签'">
                      <el-col :span="12" v-for="(labelItem,labelIndex) in item.labelList">
                        <el-tag v-if="labelItem!='' && labelIndex<2" style="width:90%;height: 100%;overflow: hidden;white-space: normal;word-wrap:break-word;">{{labelItem}}</el-tag>
                      </el-col>
                    </el-row>
                    <el-row v-else-if="tagsLabel=='关闭标签'">
                      <el-col  :span="12" v-for="(labelItem,labelIndex) in item.labelList">
                        <el-tag v-if="labelItem!=''" style="width:90%;height: 100%;overflow: hidden;white-space: normal;word-wrap:break-word;">{{labelItem}}</el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
              </el-checkbox-group>
            </el-row>
          </el-tab-pane>
          <el-tab-pane name="expire" label="过期">
            <el-row>
              <el-col :span="8" class="card-box" v-for="(item,index) in filterExpireList">
                <el-card>
                  <div slot="header" class="clearfix">
                    <span style="font-weight: bold;word-break: break-all;">{{item.fileName}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">
                      <a :href="item.fileUrl" target="_blank"><i style="color:green">下载</i></a>&nbsp
                      <i style="color:green" @click="updateLabel(item)">标签</i>&nbsp
                      <i style="color:red" @click="fileDelete(item)">删除</i>
                    </el-button>
                  </div>
                  <div>
                    <el-row>
                      <el-col :span="12" v-for="(labelItem,labelIndex) in item.labelList">
                        <el-tag v-if="labelItem!=''  && labelIndex<2" style="width:90%;height: 100%;overflow: hidden;white-space: normal;word-wrap:break-word;">{{labelItem}}</el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>

      </el-main>
    </el-container>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog title="上传文件" :visible.sync="openUploadWin" width="85%" @close="cancelUploadWin" append-to-body fullscreen>
      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="标签一" prop="label1">
              <el-input v-model="form.label1" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签二" prop="label2">
              <el-date-picker
                v-model="form.label2"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择上传日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签三" prop="label3">
              <el-input v-model="form.label3" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签四" prop="label4">
              <el-input v-model="form.label4" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="标签五" prop="label5">
              <el-input v-model="form.label5" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签六" prop="label6">
              <el-input v-model="form.label6" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签七" prop="label7">
              <el-input v-model="form.label7" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签八" prop="label8">
              <el-input v-model="form.label8" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="标签九" prop="label9">
              <el-input v-model="form.label9" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签十" prop="label10">
              <el-input v-model="form.label10" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>

      <el-upload
        action="#"
        list-type="picture-card"
        multiple
        ref="fileUploadRef"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="defaultImg" alt=""
          >
          {{file.name}}
          <span class="el-upload-list__item-actions">
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitUpload">确 定</el-button>
        <el-button @click="cancelUploadWin">取 消</el-button>
      </div>
    </el-dialog>

    <!-- 添加或修改参数配置对话框 -->
    <el-dialog title="修改/编辑标签" :visible.sync="labelWin" width="85%" @close="closeLabelWin" append-to-body>
      <el-form :model="form" label-width="120px">
        <el-row>
          <el-col :span="6">
            <el-form-item label="标签一" prop="label1">
              <el-input v-model="form.label1" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签二" prop="label2">
              <el-date-picker
                v-model="form.label2"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择上传日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签三" prop="label3">
              <el-input v-model="form.label3" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签四" prop="label4">
              <el-input v-model="form.label4" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="标签五" prop="label5">
              <el-input v-model="form.label5" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签六" prop="label6">
              <el-input v-model="form.label6" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签七" prop="label7">
              <el-input v-model="form.label7" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签八" prop="label8">
              <el-input v-model="form.label8" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="标签九" prop="label9">
              <el-input v-model="form.label9" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标签十" prop="label10">
              <el-input v-model="form.label10" clearable/>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitUpdateLabel">确 定</el-button>
        <el-button @click="closeLabelWin">取 消</el-button>
      </div>
    </el-dialog>


  </div>
</template>


<script>
  import { getUserProfile } from "@/api/system/user";
  import {saveVehicleInfo,queryVehicleTree,submitUpload,getVehicleFiles,updateVehicleFileInfo,delVehicleFile} from "@/api/vertify/vehicle";
  import Button from "view-design/src/components/button/button";


  import saveAs from 'file-saver';
  import JSZip from 'jszip'

  export default {
    name: "vehicle",
    components: {
      Button,JSZip
    },
    computed: {
      defaultImg() {
        return require('../../../assets/image/filePic.png');
      }
    },

    created() {
      this.openLoading();
      this.queryVehicleTree();
      this.getUser();
      this.getVehicleFiles(1,null);
    },

    data() {
      return {
        vehicleTreeData: [
          {
            title: '根节点',
            expand: true,
            render: (h, { root, node, data }) => {
              return h('span', {
                style: {
                  display: 'inline-block',
                  width: '100%'
                }
              }, [
                h('span', [
                  h('span', data.title)
                ]),
                h('span', {
                  style: {
                    display: 'inline-block',
                    float: 'right',
                    marginRight: '32px'
                  }
                }, [
                  h('Button', {
                    props: Object.assign({}, this.buttonProps, {
                      icon: 'ios-add',
                      type: 'primary'
                    }),
                    style: {
                      width: '32px',
                      marginRight: '8px'
                    },
                    on: {
                      click: () => { this.appendNode(root,node,data) }
                    }
                  }),
                  h('Button', {
                    props: Object.assign({}, this.buttonProps, {
                      icon: 'ios-create-outline',
                      type: 'primary'
                    }),
                    style: {
                      width: '32px'
                    },
                    on: {
                      click: () => { this.editNode(root,node,data) }
                    }
                  })
                ])
              ]);
            },
            children: [

            ]
          }
        ],
        buttonProps: {
          type: 'default',
          size: 'small',
        },
        user: {},
        openUploadWin:false,
        labelWin:false,
        disabled: false,
        activeName:"valid",
        // 查询参数
        keyWord: "",
        validList:[],
        filterValidList:[],
        expireList:[],
        filterExpireList:[],
        // 加载层信息
        loading: [],
        form: {
          "label1":"",
          "label2":"",
          "label3":"",
          "label4":"",
          "label5":"",
          "label6":"",
          "label7":"",
          "label8":"",
          "label9":"",
          "label10":""
        },
        fileId:"",
        tagsLabel:"展开标签",
        checkList:[]
      };
    },
    watch: {
      keyWord:function (val) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (val && val.length > 0) {
          this.timer = setTimeout(() => {
            let keyWordArray = val.split(" ");
            var tmpFilterValidList = [];
            this.validList.forEach(item => {
              let flag = true;
              keyWordArray.forEach(word => {
                if (flag) {
                  let flag1 = false;
                  let flag2 = true;
                  if (word != "" && item.fileName.indexOf(word) == -1) {
                    flag1 = true;
                  }
                  if (word != "") {
                    item.labelList.forEach(label => {
                      if (label.indexOf(word) != -1) {
                        flag2 = false;
                      }
                    })
                  }
                  if (flag1 && flag2) {
                    flag = false;
                  }
                }
              })
              if(flag) {
                tmpFilterValidList.push(item);
              }
            });
            this.filterValidList = tmpFilterValidList;

            var tmpFilterExpireList = [];
            this.expireList.forEach(item => {
              let flag = true;
              keyWordArray.forEach(word => {
                if(flag) {
                  let flag1 = false;
                  let flag2 = true;
                  if (word != "" && item.fileName.indexOf(word) == -1) {
                    flag1 = true;
                  }
                  if (word != "") {
                    item.labelList.forEach(label => {
                      if (label.indexOf(word) != -1) {
                        flag2 = false;
                      }
                    })
                  }
                  if (flag1 && flag2) {
                    flag = false;
                  }
                }
              })
              if(flag) {
                tmpFilterExpireList.push(item);
              }
            });
            this.filterExpireList = tmpFilterExpireList;
          }, 100)
        } else {
          this.filterValidList = this.validList;
          this.filterExpireList = this.expireList;
        }
      }
    },
    methods: {
      getUser() {
        getUserProfile().then(response => {
          this.user = response.data;
        });
      },
      queryVehicleTree() {
        queryVehicleTree().then(response => {
          if(response.code == 200) {
            this.vehicleTreeData[0].children = response.data.children;
            this.vehicleTreeData[0].title = response.data.title;
            this.loading.close();
          }else {
            this.$message.error(response.msg);
          }
        })
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

      renderContent (h, { root, node, data }) {
        return h('span', {
          style: {
            display: 'inline-block',
            width: '100%'
          }
        }, [
          h('span', [
            h('span', data.title)
          ]),
          h('span', {
            style: {
              display: 'inline-block',
              float: 'right',
              marginRight: '32px'
            }
          }, [
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-add'
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => { this.appendNode(root,node,data) }
              }
            }),
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-create-outline'
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => { this.editNode(root,node,data) }
              }
            }),
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-remove'
              }),
              on: {
                click: () => { this.removeNode(root, node, data) }
              }
            })
          ])
        ]);
      },
      appendNode (root,node,data) {
        this.$prompt('请输入节点名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          if(value==null || value.split(" ").join("").length === 0) {
            this.$message.error('节点名不能为空！');
          }else {
            //检查名字不能重复
            let findList = root.filter((item) => {
              if(item.node.title == value) {
                return item;
              }
            })
            if(findList.length > 0) {
              this.$message.error('该节点名已存在，请重新输入！');
            }else {
              const children = data.children || [];
              children.push({
                title: value,
                expand: true
              });
              this.$set(data, 'children', children);
              let obj = this;
              setTimeout(function () {
                obj.saveVehicleInfo()
              }, 500);
            }

          }

        });


      },

      editNode (root,node,data) {
        this.$prompt('请输入节点名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          if(value==null || value.split(" ").join("").length === 0) {
            this.$message.error('节点名不能为空！');
          }else {
            //检查名字不能重复
            let findList = root.filter((item) => {
              if(item.node.title == value) {
                return item;
              }
            })
            if(findList.length > 0) {
              this.$message.error('该节点名已存在，请重新输入！');
            }else {
              debugger
              let oldTitle = data.title;
              this.$set(data, 'title', value);
              this.saveVehicleInfo(oldTitle,value);
            }

          }

        });

      },

      removeNode (root, node, data) {
        this.$confirm('该层级删除后，对应文件全部清空，请确认是否删除？')
          .then(_ => {
            const parentKey = root.find(el => el === node).parent;
            const parent = root.find(el => el.nodeKey === parentKey).node;
            const index = parent.children.indexOf(data);
            parent.children.splice(index, 1);
            let obj = this;
            debugger
            setTimeout(function () {
              obj.saveVehicleInfo(data.title)
              obj.validList=[];
              obj.filterValidList=[];
              obj.expireList=[];
              obj.filterExpireList=[];
            },500);
          })
          .catch(_ => {});

      },

      saveVehicleInfo(oldTitle,newTitle) {
        this.vehicleTreeData[0].oldTitle = oldTitle;
        this.vehicleTreeData[0].newTitle = newTitle;
        let params = JSON.stringify(this.vehicleTreeData[0]);
        saveVehicleInfo(params).then(response => {
          if (200 == response.code) {
            this.$message.success("保存成功！")
          } else {
            this.$message.error(response.msg);
          }
        });
      },

      getVehicleFiles(status,vehicleTitle) {
        let params = {};
        params.status = status;
        params.vehicleTitle = vehicleTitle;
        this.checkList=[];
        getVehicleFiles(params).then(response => {
          if (200 == response.code) {
            if(status === 1) {
              this.validList = response.data;
              this.filterValidList = response.data;
            } else {
              this.expireList = response.data;
              this.filterExpireList = response.data;
            }

            if(this.keyWord!="") {
              let keyWordArray = this.keyWord.split(" ");
              var tmpFilterValidList = [];
              this.validList.forEach(item => {
                let flag = true;
                keyWordArray.forEach(word => {
                  if (flag) {
                    let flag1 = false;
                    let flag2 = true;
                    if (word != "" && item.fileName.indexOf(word) == -1) {
                      flag1 = true;
                    }
                    if (word != "") {
                      item.labelList.forEach(label => {
                        if (label.indexOf(word) != -1) {
                          flag2 = false;
                        }
                      })
                    }
                    if (flag1 && flag2) {
                      flag = false;
                    }
                  }
                })
                if (flag) {
                  tmpFilterValidList.push(item);
                }
              });
              this.filterValidList = tmpFilterValidList;

              var tmpFilterExpireList = [];
              this.expireList.forEach(item => {
                let flag = true;
                keyWordArray.forEach(word => {
                  if (flag) {
                    let flag1 = false;
                    let flag2 = true;
                    if (word != "" && item.fileName.indexOf(word) == -1) {
                      flag1 = true;
                    }
                    if (word != "") {
                      item.labelList.forEach(label => {
                        if (label.indexOf(word) != -1) {
                          flag2 = false;
                        }
                      })
                    }
                    if (flag1 && flag2) {
                      flag = false;
                    }
                  }
                })
                if (flag) {
                  tmpFilterExpireList.push(item);
                }
              });
              this.filterExpireList = tmpFilterExpireList;
            }
          } else {
            this.$message.error(response.msg);
          }
        });
      },


      uploadFile() {
        let nodes = this.$refs.tree.getSelectedNodes();
        if(nodes.length == 0) {
          this.$message.error("请先在左侧选择对应层级！");
        }else {
          this.openUploadWin = true;
          this.form.label1 = this.user.userName;

        }
      },
      submitUpload() {

        let params = new FormData();
        let flag = true;
        this.$refs['fileUploadRef'].uploadFiles.forEach(file => {
          if(file.raw) {
            flag = false;
            params.append("files", file.raw);
          }
        })
        if(flag) {
          this.$message.error("请上传文件！");
        }else if(this.form.label1===undefined || this.form.label1==="") {
          this.$message.error("请填写上传人姓名！");
        }else if(this.form.label2===undefined || this.form.label2==="" || this.form.label2==undefined) {
          this.$message.error("请填写上传日期！");
        }else{
          let labels = [];
          labels.push(this.form.label1);
          labels.push(this.form.label2);
          labels.push(this.form.label3);
          labels.push(this.form.label4);
          labels.push(this.form.label5);
          labels.push(this.form.label6);
          labels.push(this.form.label7);
          labels.push(this.form.label8);
          labels.push(this.form.label9);
          labels.push(this.form.label10);
          params.append("labels", labels);
          params.append("vehicleName", this.$refs.tree.getSelectedNodes()[0].title);
          this.loading = this.$loading({
            lock: true,
            text: "拼命上传中，请稍等片刻",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          submitUpload(params).then(response => {
            this.loading.close();
            if (response.code == 200) {
              this.$message.success("上传成功！");
              this.cancelUploadWin();
              this.getVehicleFiles(1,this.$refs.tree.getSelectedNodes()[0].title);
            } else {
              this.$message.error(response.msg);
            }
          })
        }

      },
      cancelUploadWin() {
        this.openUploadWin = false;
        this.form = {
          "label1":"",
          "label2":"",
          "label3":"",
          "label4":"",
          "label5":"",
          "label6":"",
          "label7":"",
          "label8":"",
          "label9":"",
          "label10":""
        };
        this.$refs.fileUploadRef.clearFiles();

      },

      handleRemove(file) {
        console.log(file);
        let Arr = this.$refs['fileUploadRef'].uploadFiles;
        let index = Arr.indexOf(file);
        let num = 0;
        Arr.map(item => {
          if(item.uid == file.uid) {
            Arr.splice(num,1);
          }
          num++;
        })
      },

      fileExpire(fileInfo) {
        this.$confirm('确认将该文件设置为过期吗？')
          .then(_ => {
            let params = {};
            params.id = fileInfo.id;
            params.status = 0;
            updateVehicleFileInfo(params).then(response => {
              if (response.code == 200) {
                this.$message.success("设置成功！");
                if(this.$refs.tree.getSelectedNodes().length == 0) {
                  this.getVehicleFiles(1,null);
                }else {
                  this.getVehicleFiles(1,this.$refs.tree.getSelectedNodes()[0].title);
                }
              }else {
                this.$message.error("设置失败！");
              }
            })
          })
          .catch(_ => {});
      },

      fileDelete(fileInfo) {

        this.$confirm('确认删除将该文件吗？')
          .then(_ => {
            let params = {};
            params.id = fileInfo.id;
            delVehicleFile(params).then(response => {
              if (response.code == 200 && response.data) {
                this.$message.success("删除成功！");
                let status = 1;
                if(this.activeName == "expire") {
                  status = 0;
                }
                if(this.$refs.tree.getSelectedNodes().length == 0) {
                  this.getVehicleFiles(status,null);
                }else {
                  this.getVehicleFiles(status,this.$refs.tree.getSelectedNodes()[0].title);
                }
              }else {
                this.$message.error("删除失败！");
              }
            })
          })
          .catch(_ => {});
      },

      selectChange() {
        let status=1;
        if (this.activeName == "expire") {
          status = 0;
        }
        if(this.$refs.tree.getSelectedNodes().length > 0) {
          this.getVehicleFiles(status,this.$refs.tree.getSelectedNodes()[0].title);
        }
      },

      updateLabel(fileInfo) {
          this.labelWin = true;
          this.fileId = fileInfo.id;
          this.form.label1 = fileInfo.labelList[0];
          this.form.label2 = fileInfo.labelList[1];
          this.form.label3 = fileInfo.labelList[2];
          this.form.label4 = fileInfo.labelList[3];
          this.form.label5 = fileInfo.labelList[4];
          this.form.label6 = fileInfo.labelList[5];
          this.form.label7 = fileInfo.labelList[6];
          this.form.label8 = fileInfo.labelList[7];
          this.form.label9 = fileInfo.labelList[8];
          this.form.label10 = fileInfo.labelList[9];
      },

      submitUpdateLabel() {
        debugger
        if(this.form.label1===undefined || this.form.label1==="") {
          this.$message.error("请填写上传人姓名！");
        }else if(this.form.label2===undefined || this.form.label2==="" || this.form.label2==undefined) {
          this.$message.error("请填写上传日期！");
        }else {
          let params = {};
          params.id = this.fileId;
          params.labels = this.form.label1+"#"+this.form.label2+"#"+this.form.label3+"#"+this.form.label4+"#"
            +this.form.label5+"#"+this.form.label6+"#"+this.form.label7+"#"+this.form.label8+"#"+this.form.label9+"#"+this.form.label10;
          updateVehicleFileInfo(params).then(response => {
            if (response.code == 200) {
              this.$message.success("修改成功！");
              this.closeLabelWin();
              let status=1;
              if (this.activeName == "expire") {
                status = 0;
              }
              if (this.$refs.tree.getSelectedNodes().length == 0) {
                this.getVehicleFiles(status, null);
              } else {
                this.getVehicleFiles(status, this.$refs.tree.getSelectedNodes()[0].title);
              }
            } else {
              this.$message.error("修改失败！");
            }
          })
        }
      },

      closeLabelWin() {
        this.labelWin = false;
        this.fileId = "";
        this.form = {
          "label1":"",
          "label2":"",
          "label3":"",
          "label4":"",
          "label5":"",
          "label6":"",
          "label7":"",
          "label8":"",
          "label9":"",
          "label10":""
        };
      },


      handleClick(tab, event) {
        let status = 1;
        if(tab.name === "expire") {
          status = 0;
          this.activeName = "expire";
        }else {
          this.activeName = "valid";
        }
        if(this.$refs.tree.getSelectedNodes().length == 0) {
          this.getVehicleFiles(status,null);
        }else {
          this.getVehicleFiles(status,this.$refs.tree.getSelectedNodes()[0].title);
        }
      },

      updateTagsStatus() {
        if(this.tagsLabel=='展开标签') {
          this.tagsLabel='关闭标签';
        }else {
          this.tagsLabel='展开标签';
        }
      },

      batchDownLoad() {
        console.log(this.checkList);
        let zip = new JSZip();
        let cache = {};
        let promises = [];
        if(this.checkList.length==0) {
          this.$message.warning("请选择下载文件！");
        }else {
          this.loading = this.$loading({
            lock: true,
            text: "正在下载中，请稍等片刻",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });
          debugger
          for(let i =0;i<this.checkList.length;i++){
            const promise = this.getFile(this.checkList[i])
              .then(data => {
                debugger
                const arr_name = this.checkList[i].split("/");
                var file_name = arr_name[arr_name.length - 1] // 获取文件名
                file_name = file_name.substring(file_name.indexOf("&")+1);
                zip.file(file_name, data, { binary: true })
                cache[file_name] = data
              })
            promises.push(promise)
          }
          Promise.all(promises).then(() => {
            zip.generateAsync({type:"blob"}).then(content => {
              saveAs(content, "压缩文件.zip") // 利用file-saver保存文件
            })
          })
          this.loading.close();
        }
      }
      ,
      getFile(url) {
        return new Promise((resolve, reject) => {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);//get请求，请求地址，是否异步
          xhr.responseType = "blob"; // 返回类型blob
          xhr.onload = function (data, textStatus, request) {// 请求完成处理函数
            if (this.status === 200) {
              debugger
              var blob = this.response;// 获取返回值
              resolve(blob)
            }
          };
          // 发送ajax请求
          xhr.send();
        })

      },


    }
  }
</script>

<style>

  .inputTransfer .el-transfer-panel{
    width: 40%;
    height: 450px;
  }
  .inputTransfer .el-transfer-panel__list.is-filterable{
    height: 350px;
  }

  .el-dialog.is-fullscreen {
    margin-top: 0vh !important;
  }

  .row-space {
    margin-bottom: 15px;
    font-size:16px
  }

  .demo-tree-render .ivu-tree-title{
    width: 100%;
  }

  .el-upload-list--picture-card .el-upload-list__item {
    height: 228px;
  }
</style>
