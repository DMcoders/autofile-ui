<template>
  <div>
    <el-row>
      <div>
        <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
          <el-form-item label="车型" prop="autoType">
            <el-select v-model="queryParams.autoType" clearable @clear="clearAutoType" size="small">
              <el-option
                v-for="autoType in autoTypes"
                :key="autoType"
                :label="autoType"
                :value="autoType"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
            >新增
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
    <el-row>
      <div class="echarts-box">
        <e-charts class="echarts" :options="echartOptions" @dblclick="dblClick" @click="doClick"/>
      </div>
    </el-row>

    <div>
      <el-dialog :title="title" :visible.sync="open" width="60%" :show-close="false" append-to-body>
        <el-form ref="form" :model="form" label-width="50px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="车型" prop="autoType">
                <el-select v-model="form.autoType" size="small" @change="changeCountryFileByAutoType">
                  <el-option
                    v-for="autoType in autoTypes"
                    :key="autoType"
                    :label="autoType"
                    :value="autoType"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="国家" prop="exCountry">
                <el-select
                  v-model="form.countryId"
                  multiple:false
                  filterable
                  remote
                  clearable
                  reserve-keyword
                  placeholder="请输入国家中/英文名称"
                  size="medium"
                  :remote-method="remoteSearchExCountry"
                  @change="changeCountryFileByCountry"
                >
                  <el-option
                    v-for="country in fuzzyQueryExCountries"
                    :key="country.id"
                    :label="country.countryName"
                    :value="country.id">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="11">
              <el-table
                ref="allTable"
                :row-key="getRowKey"
                :data="allFiles"
                border
                fit
                highlight-current-row
                @selection-change="handleAllChange"
              >
                <el-table-column type="selection" :reserve-selection="true" width="55"></el-table-column>
                <el-table-column label="名称" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.fileName }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="类别" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.category }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="2" style="text-align:center;">
              <el-button
                @click="addFileToRight"
                type="primary"
                :disabled="!allFileData.length"
                icon="el-icon-arrow-right"
                circle
              ></el-button>
              <el-button
                @click="removeFileFromRight"
                type="primary"
                :disabled="!selFileData.length"
                icon="el-icon-arrow-left"
                circle
                style="margin-left: 0;margin-top: 10px;"
              ></el-button>
            </el-col>
            <el-col :span="11">
              <el-table
                ref="selectedAllTable"
                :row-key="getRowKey"
                :data="selFiles"
                border
                fit
                highlight-current-row
                @selection-change="handleSelectedFileChange"
              >
                <el-table-column type="selection" :reserve-selection="true" width="55"></el-table-column>
                <el-table-column label="名称" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.fileName }}</span>
                  </template>
                </el-table-column>

                <el-table-column label="类别" align="center">
                  <template slot-scope="{row}">
                    <span>{{ row.category }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </el-dialog>
    </div>

    <div>
      <el-dialog :visible.sync="loading" width="70%" append-to-body>
        <el-table :data="countryFiles" max-height="500" style="width: 100%">
          <el-table-column label="文件名" align="center" prop="fileName"/>
          <el-table-column label="车型" align="center" prop="autoType"/>
          <el-table-column label="类别" align="center" prop="category"/>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts'
  import '../../../../node_modules/echarts/map/js/world.js'
  import {getWorld, fuzzyQueryExCountryByPage, updateCountryFile, queryCountryFile} from "@/api/vertify/excountry";
  import {list as getAllFileList} from "@/api/vertify/standardFiles";


  export default {
    name: 'DailyActiveChart',
    components: {ECharts},
    data() {
      return {
        selFiles: [],
        allFiles: [],
        selFileData: [],
        allFileData: [],
        tableKey: 0,
        title: "编辑",
        open: false,
        queryExCountry: {
          pageNum: 1,
          pageSize: 20,
          countryName: undefined,
        },
        categoryMap: [],
        fuzzyQueryExCountries: [],
        form: {},
        queryParams: {},
        standardFileCategory: ['ECE', 'GCC', 'DOT', 'GHOST', 'CCC', '专属'],
        autoTypes: ['M1', 'M2', 'M3', 'N1', 'N2', 'N3'],
        echartOptions: {},
        nameMap: {"China": "中国"},
        dataMap: [{name: '中国', value: 123, show: ""}, {name: '美国', value: 1022, show: ""}, {
          name: '阿富汗',
          value: 999,
          show: ""
        }],
        countries: [],
        countriesMap: undefined,

        loading: false,
        countryFiles:[],
      }
    },
    created() {
      this.getAllCountries()
    },

    mounted: function () {
      this.initCountry();
    },
    methods: {
      getAllCountries() {
        getWorld().then(response => {
          if (200 == response.code) {
            let countries = response.data;
            let dateMap = new Map;
            if (undefined != countries && countries.length > 0) {
              countries.forEach(item => {
                dateMap.set(item.id, item.countryName);
              })
              this.countriesMap = dateMap;
            }
          } else {
            this.$message.error(response.msg);
          }
        })
      },

      initCountry() {
        getWorld().then(response => {
          if (200 == response.code) {
            let countries = response.data;
            let englishMap = new Map;
            let idMap = new Map;
            if (undefined != countries && countries.length > 0) {
              countries.forEach(item => {
                englishMap.set(item.englishCountryName, item.countryName);
                idMap.set(item.id, item.countryName);
              })
              this.countriesMap = idMap;
              this.nameMap = this.createObj(englishMap);

              let params = {
                autoType: undefined,
                countryId: undefined,
              };
              queryCountryFile(params).then(response => {
                if (200 == response.code) {
                  let countryFileDTOS = response.data;
                  countryFileDTOS.forEach(item => {
                    let countryName = this.countriesMap.get(item.countryId);
                    if (countryName) {
                      let data = {
                        name: countryName,
                        show: this.createEchartsShow(item.categoryCount),
                        value: this.createEchartsValue(item.categoryCount),
                        countryFiles : item.countryFileDTOS,
                      }
                      this.categoryMap.push(data);
                    }
                    this.initEcharts();
                  })
                } else {
                  this.$message.error(response.msg);
                }
              })
            }
          } else {
            this.$message.error(response.msg);
          }
        })
      }
      ,

      initEcharts() {
        this.echartOptions = {
          dataRange: {
            show: true,
            min: 0,
            max: 100,
            text: ['High', 'Low'],
            x: 'left',
            y: 'center',
            realtime: true,
            calculable: true,
            color: ['#FF0000', '#DAA520', '#1C86EE']
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: "rgba(255,255,255,1)",
            extraCssText: 'width:100px;height:100px;',
            borderWidth: '1',
            borderColor: 'gray',
            textStyle: {
              color: 'black',
            },
            formatter: function (params) {
              if (params.name && params.data && params.data.name) {
                return params.data.name + params.data.show;
              }
            }
          },
          geo: {
            map: 'world',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: '#37376e',
                borderColor: '#000'
              },
              emphasis: {
                areaColor: '#3E98FE'
              }
            }
          },
          series: [{
            name: '',
            type: 'map',
            mapType: 'world',
            radius: '100%',
            itemStyle: {
              normal: {
                borderWidth: 0.5,
                borderColor: '#A9A9A9',
                areaStyle: {
                  color: '#37376e'
                }
              },
              emphasis: {
                areaColor: '#3E98FE',
                borderColor: '#fff',
                borderWidth: 0
              }
            },
            mapLocation: {
              y: 100
            },
            data: this.categoryMap,
            nameMap: this.nameMap,

            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            }
          }]
        }
      }
      ,

      createMap(obj) {
        let map = new Map()
        for (let [key, value] of Object.entries(obj)) {
          map.set(key, value)
        }
        return map;
      },

      createObj(map) {
        const obj = new Object();
        map.forEach((item, key, map) => {
          obj[key] = item
        })
        return obj
      },

      createEchartsShow(obj) {
        let map = this.createMap(obj);
        let str = "";
        map.forEach(function (value, key) {
          str = str + "<br/>" + key + ":" + value;
        });
        return str;
      },

      createEchartsValue(obj) {
        let map = this.createMap(obj);
        let count = 0;
        map.forEach(function (value, key) {
          count = count + value;
        });
        return count;
      },

      remoteSearchExCountry(nameOrCode) {
        if (nameOrCode !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.queryExCountry.countryName = nameOrCode;
            fuzzyQueryExCountryByPage(this.queryExCountry).then(res => {
              if (res.code == 200) {
                this.fuzzyQueryExCountries = res.data.list;
              } else {
                this.fuzzyQueryExCountries = [];
              }
            });
          }, 200);
        } else {
          this.fuzzyQueryExCountries = [];
        }
      }
      ,


      changeCountryFileByParam() {
        this.selFiles = [];
        let params = {
          countryId: this.form.countryId,
          autoType: this.form.autoType,
        }
        queryCountryFile(params).then(response => {
          if (200 == response.code) {
            if (response.data.length === 1) {
              let countryFileDTOS = response.data[0].countryFileDTOS;
              if (undefined != countryFileDTOS && null != countryFileDTOS) {
                countryFileDTOS.forEach(item => {
                  this.selFiles.push({
                    id: item.standardFileId,
                    fileName: item.fileName,
                    category: item.category,
                    versionYear: item.versionYear,
                  })
                })
              }
            }
          } else {
            this.$message.error(response.msg);
          }
        });
      }
      ,

      changeCountryFileByAutoType() {
        if (undefined == this.form.autoType) {
          return;
        }
        this.changeCountryFileByParam();
      },


      changeCountryFileByCountry() {
        if (undefined == this.form.countryId) {
          return;
        }
        this.changeCountryFileByParam();
        this.fuzzyQueryExCountries.forEach(item => {
          if (item.id === this.form.countryId) {
            this.form.country = item.countryName;
          }
        })
      },

      clearAutoType()
      {
        this.queryParams.autoType = undefined;
      },

      submitForm() {
        let params = {};
        params.countryFileDTO = this.form;
        params.editStandardFileList = this.selFiles;
        updateCountryFile(params).then(response => {
          if (200 == response.code) {
            this.cancel();
            this.msgSuccess("保存成功");
            this.initCountry();
          } else {
            this.$message.error(response.msg);
          }
        });
      }
      ,

      cancel() {
        this.open = false;
        this.$set(this.form, "autoType", undefined);
        this.fuzzyQueryExCountries = [];
        this.queryExCountry.countryName = undefined;
        this.resetForm();
      }
      ,

      resetForm() {
        this.form.countryId = undefined;
        this.form.autoType = undefined;
        this.form.country = undefined;
        this.selFiles = [];
      },

      getRowKey(row) {
        return row.id;
      },

      // 将左边表格选择项存入allFileData
      handleAllChange(rows) {
        if (undefined === this.form.countryId) {
          this.$message("请先选择国家")
          return;
        }
        this.allFileData = [];
        if (rows) {
          rows.forEach(row => {
            if (row) {
              this.allFileData.push(row);
            }
          });
        }
      }
      ,

      // 左边表格选择项移到右边
      addFileToRight() {
        setTimeout(() => {
          this.$refs["allTable"].clearSelection();
          this.$refs["selectedAllTable"].clearSelection();
        }, 0);
        let repeat = false;
        this.selFiles.forEach(item => {
          if (this.allFileData[0] && item.id === this.allFileData[0].id) {
            repeat = true;
            this.$message("此文件已添加");
            return;
          }
        });
        if (repeat === false) {
          this.allFileData.forEach(item => {
            this.selFiles.push(item);
          });
          for (let i = 0; i < this.allFiles.length; i++) {
            for (let j = 0; j < this.allFileData.length; j++) {
              if (
                this.allFiles[i] &&
                this.allFileData[j] &&
                this.allFiles[i].id === this.allFileData[j].id
              ) {
                this.allFiles.splice(i, 1);
              }
            }
          }
        }
      }
      ,

      // 右边表格选择项移到左边
      removeFileFromRight() {
        setTimeout(() => {
          this.$refs["allTable"].clearSelection();
          this.$refs["selectedAllTable"].clearSelection();
        }, 0);
        this.selFileData.forEach(item => {
          this.allFiles.push(item);
        });
        for (let i = 0; i < this.selFiles.length; i++) {
          for (let j = 0; j < this.selFileData.length; j++) {
            if (
              this.selFiles[i] &&
              this.selFileData[j] &&
              this.selFiles[i].id === this.selFileData[j].id
            ) {
              this.selFiles.splice(i, 1);
            }
          }
        }
      }
      ,

      // 将右边表格选择项存入selFileData
      handleSelectedFileChange(rows) {
        this.selFileData = [];
        if (rows) {
          rows.forEach(row => {
            if (row) {
              this.selFileData.push(row);
            }
          });
        }
      }
      ,

      handleAdd() {
        this.resetForm();
        if (undefined == this.queryParams.autoType) {
          this.$message("请先选择车型");
          return;
        }
        this.$set(this.form, "autoType", this.queryParams.autoType);
        getAllFileList().then(response => {
          let allFiles = [];
          response.data.standardFileList.forEach(item => {
              allFiles.push({
                id: item.id,
                fileName: item.fileName,
                category: item.category,
                versionYear: item.versionYear,
              })
            }
          )
          this.allFiles = allFiles;
        });
        this.open = true;
      },


      // 双击事件
      dblClick(v) {
        //console.log(v)
      }
      ,
      // 单击事件
      doClick(v) {
        this.countryFiles = [];
        this.countryFiles = v.data.countryFiles;
        this.loading = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .echarts-box {
    margin: -25px 0;
    border-radius: 10px;
    background-color: #fff;

    .echarts {
      width: 100%;
      height: 500px;
    }

    .title-box {
      display: flex;

      .label {
        width: -25px;
        height: -10px;
        margin-right: 5px;
      }

      .title {
        color: #4C4C4C;
        font-size: 18px;
      }
    }
  }

  .transferC .el-transfer-panel {
    width: 30%;
    height: 250px;
  }

  .transferC .el-transfer-panel__list.is-filterable {
    height: 250px;
  }

</style>
