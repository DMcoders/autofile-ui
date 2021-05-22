<template>
  <div class="app-container">
      <el-container>
        <!--左侧-->
        <el-aside width="18%" style="background-color: #FFFFFF">
          <div>
            <el-button
              type="primary"
              icon="el-icon-plus"
              size="mini"
              @click="handleAdd"
            >新增
            </el-button>
          </div>
          <el-tree :data="productMenu" :props="productMenu" @node-click="handleNodeClick" defaultExpandAll></el-tree>
        </el-aside>
        <!--主题-->
        <el-main>


          <el-row>
            <div>
              <el-form :model="queryParams" ref="queryForm" label-width="130px">
                <div v-for="(item,index) in filters">
                  <el-col :span="21">
                    <div style="margin-bottom:-25px">
                    <el-form-item :label="item.selectKey">
                      <el-radio-group v-model="radioArray[index]" v-for="ite in item.options" :key="item.autoSpecie + ite"
                                      size="mini"
                                      @change="changeQueryParam">
                        <el-radio-button :label="ite">
                        </el-radio-button>
                      </el-radio-group>
                    </el-form-item>
                    </div>
                  </el-col>
                </div>
              </el-form>
            </div>
          </el-row>

          <el-row>
            <div v-for="(item,index) in list">
              <el-col :span="21" class="card-box">
                <el-card>
                  <div slot="header" class="clearfix">
                    <span style="font-weight: bold;">{{item.autoName}}</span>
                  </div>

                  <el-container>
                    <el-aside width="40%" style="padding:0;margin-bottom: 0;background-color: #FFFFFF">
                      <div>
                        <img :src="item.autoImage" :onerror="defaultImg" class="image" height="200" width="100%">
                      </div>
                    </el-aside>
                    <el-main>

                      <div class="text item">
                        <el-row :gutter="1">
                          <el-col :span="10">
                            <div>
                              产品平台:{{item.autoSeries}}
                            </div>
                          </el-col>

                          <el-col :span="10">
                            <div>
                              生命周期状态:
                            </div>
                          </el-col>
                        </el-row>
                      </div>

                      <div class="text item">
                        <el-row :gutter="1">
                          <el-col :span="10">
                            <div>
                              动力总成:{{item.gearbox}}
                            </div>
                          </el-col>

                          <el-col :span="10">
                            <div>
                              结构区别号:{{item.structuralDistinctionNumber}}
                            </div>
                          </el-col>
                        </el-row>
                      </div>

                      <div class="text item">
                        <el-row>
                          <el-col :span="10">
                            <div>
                              排放标准:{{item.emissionStandards}}
                            </div>
                          </el-col>

                          <el-col :span="10" >
                            <div>
                              适用海拔:{{item.altitude}}
                            </div>
                          </el-col>
                        </el-row>
                      </div>


                      <div class="text item">
                        <el-row>
                          <el-col :span="10">
                            <div>
                              适用温度:{{item.temperature}}
                            </div>
                          </el-col>

                          <el-col :span="10">
                            <div>
                              目标市场:{{item.targetMarket}}
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                      <div class="text item">
                        <el-row>
                          <el-col :span="10">
                            <div>
                              已售市场:{{item.soldMarket}}
                            </div>
                          </el-col>

                          <el-col :span="10">
                            <div>
                              可售市场:{{item.availableMarket}}
                            </div>
                          </el-col>
                        </el-row>
                      </div>

                    </el-main>
                  </el-container>


                  <div>
                    <el-button style="float: right; padding: 3px 0" type="text">
                      <i class="el-icon-edit" style="color:green" @click="handleUpdate(item)"></i>&nbsp
                      <i class="el-icon-delete" style="color:red" @click="handleDelete(item)"></i>
                    </el-button>
                  </div>
                </el-card>
              </el-col>
            </div>

          </el-row>
        </el-main>
      </el-container>





    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <el-dialog :title="title" :visible.sync="open" width="900px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="90px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="名称" prop="autoName">
              <el-input v-model="form.autoName" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="产品平台" prop="autoSeries">
              <el-select style="width:100%" clearable v-model="form.autoSeries" size="small">
                <el-option
                  v-for="autoSerie in autoSeriesArray"
                  :key="autoSerie"
                  :label="autoSerie"
                  :value="autoSerie"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="排放标准" prop="emissionStandards">
              <el-select style="width:100%" clearable v-model="form.emissionStandards" size="small">
                <el-option
                  v-for="emissionStandard in emissionStandardsArray"
                  :key="emissionStandard"
                  :label="emissionStandard"
                  :value="emissionStandard"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="排量" prop="engineCapacity">
              <el-input v-model="form.engineCapacity" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="排量单位" prop="engineCapacityUnit">
              <el-select style="width:100%" clearable v-model="form.engineCapacityUnit" size="small" clearable>
                <el-option
                  v-for="engineCapacityUnit in engineCapacityUnitArray"
                  :key="engineCapacityUnit"
                  :label="engineCapacityUnit"
                  :value="engineCapacityUnit  "
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="变速器型式" prop="gearbox">
              <el-select style="width:100%" clearable v-model="form.gearbox" size="small" clearable>
                <el-option
                  v-for="gearbox in gearboxArray"
                  :key="gearbox"
                  :label="gearbox"
                  :value="gearbox"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="适用海拔" prop="altitude">
              <el-input v-model="form.altitude" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="适用温度" prop="temperature">
              <el-input v-model="form.temperature" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="目标市场" prop="targetMarket">
              <el-select style="width:100%" clearable v-model="form.targetMarkets" size="small" multiple>
                <el-option
                  v-for="targetMarket in targetMarketArray"
                  :key="targetMarket"
                  :label="targetMarket"
                  :value="targetMarket"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item label="已售市场" prop="soldMarket">
              <el-select style="width:100%" clearable v-model="form.soldMarkets" size="small" multiple>
                <el-option
                  v-for="soldMarket in soldMarketArray"
                  :key="soldMarket"
                  :label="soldMarket"
                  :value="soldMarket"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="可售市场" prop="availableMarket">
              <el-select style="width:100%" clearable v-model="form.availableMarkets" size="small" multiple>
                <el-option
                  v-for="availableMarket in availableMarketArray"
                  :key="availableMarket"
                  :label="availableMarket"
                  :value="availableMarket"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结构区别号" prop="structuralDistinctionNumber">
              <el-input v-model="form.structuralDistinctionNumber" clearable/>
            </el-form-item>
          </el-col>
        </el-row>


        <el-row>
          <el-col :span="8">
            <el-form-item prop="image" label="图片上传">
              <el-upload
                ref="upload"
                :on-change="imageChange"
                list-type="picture-card"
                name="file"
                action=""
                :limit="1"
                multiple
                :auto-upload="false"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemovePicture"
                :file-list="form.fileList"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="confirm('form')">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
  import {getToken} from '@/utils/auth';
  import {addAndUpload, list, deleteSingle, getOne} from "@/api/vertify/autoManage";

  export default {
    name: "product",

    computed: {
      defaultImg() {
        return 'this.src="' + require('../../../assets/image/profile.jpg') + '"';
      }
    },

    mounted() {
      this.productMenu = [
        {
          "menuType": "category",
          "label": "M1",
          "children": [
            {
              "menuType": "menu",
              "label": "轿车"
            },
            {
              "menuType": "menu",
              "label": "新能源乘用车"
            },
            {
              "menuType": "menu",
              "label": "运动型多用途车(SUV)"
            },
            {
              "menuType": "menu",
              "label": "商务车"
            }
          ]
        },
        {
          "menuType": "category",
          "label": "M2",
          "children": []
        },
        {
          "menuType": "category",
          "label": "M3",
          "children": []
        },
        {
          "menuType": "category",
          "label": "N1",
          "children": [
            {
              "menuType": "menu",
              "label": "轻卡"
            },
            {
              "menuType": "menu",
              "label": "多功能商务车"
            },
            {
              "menuType": "menu",
              "label": "皮卡"
            },
            {
              "menuType": "menu",
              "label": "小卡"
            },
            {
              "menuType": "menu",
              "label": "新能源轻卡"
            },
            {
              "menuType": "menu",
              "label": "新能源多功能商务车"
            },
            {
              "menuType": "menu",
              "label": "新能源皮卡"
            },
            {
              "menuType": "menu",
              "label": "新能源小卡"
            }
          ]
        },
        {
          "menuType": "category",
          "label": "N2",
          "children": [
            {
              "menuType": "menu",
              "label": "窄体中重卡"
            },
            {
              "menuType": "menu",
              "label": "中体中重卡"
            },
            {
              "menuType": "menu",
              "label": "宽体中重卡"
            },
            {
              "menuType": "menu",
              "label": "新能源中重卡"
            }
          ]
        },
        {
          "menuType": "category",
          "label": "N3",
          "children": []
        }
      ]
    },
    data() {
      return {
        productMenu: [],
        productSelectParam: [
          {
            "autoSpecie": "轿车",
            "filters": [
              {
                "selectKey": "发动机排量",
                "options": [
                  "不限",
                  "≤1.5",
                  "1.6-2.0",
                  "2.1-2.5"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "J7",
                  "J4"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "5MT",
                  "6MT",
                  "CVT",
                  "6DCT",
                  "5AT"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源乘用车",
            "filters": [
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "IEV 6E",
                  "IEV 7",
                  "IEV 7S"
                ]
              },
              {
                "selectKey": "续航里程",
                "options": [
                  "不限",
                  "≤300Km",
                  "301-400Km",
                  "401-500km",
                  ">500km"
                ]
              },
              {
                "selectKey": "充电标准",
                "options": [
                  "不限",
                  "CN",
                  "EU"
                ]
              },
              {
                "selectKey": "电池冷却方式",
                "options": [
                  "不限",
                  "Wind",
                  "Liquid"
                ]
              }
            ]
          },
          {
            "autoSpecie": "运动型多用途车(SUV)",
            "filters": [
              {
                "selectKey": "发动机排量",
                "options": [
                  "不限",
                  "<=1.5",
                  "1.6-2.0",
                  "2.1-2.5"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "S1",
                  "S2",
                  "S3",
                  "S4",
                  "S5",
                  "S6",
                  "S7"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "5MT",
                  "6MT",
                  "CVT",
                  "6DCT",
                  "5AT"
                ]
              }
            ]
          },
          {
            "autoSpecie": "商务车",
            "filters": [
              {
                "selectKey": "发动机排量",
                "options": [
                  "不限",
                  "<=1.5",
                  "1.6-2.0",
                  "2.0-2.5"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "R3",
                  "M3",
                  "M4",
                  "M5",
                  "M6"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "5MT",
                  "6MT",
                  "CVT",
                  "6DCT",
                  "5AT"
                ]
              }
            ]
          },
          {
            "autoSpecie": "轻卡",
            "filters": [
              {
                "selectKey": "左右舵",
                "options": [
                  "不限",
                  "L",
                  "R"
                ]
              },
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "808-Single",
                  "808-King",
                  "808-Double",
                  "N Series-Single",
                  "N Series-King",
                  "N Series-Double",
                  "V Series-Single",
                  "V Series-King",
                  "V Series-Double",
                  "K Series-Single",
                  "K Series-King",
                  "K Series-Double"
                ]
              },
              {
                "selectKey": "发动机排量",
                "options": [
                  "不限",
                  "≤2.0",
                  "2.1-3.0",
                  "2.1-3.0",
                  ">4.0"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "轴距(mm)",
                "options": [
                  "不限",
                  "2490",
                  "2800",
                  "3360",
                  "3308",
                  "3365",
                  "3815",
                  "3845",
                  "4150",
                  "4175",
                  "4475",
                  "4700",
                  "5300"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "808",
                  "N Series",
                  "808Annual models",
                  "V Series",
                  "K Series"
                ]
              },
              {
                "selectKey": "厂定最大总质量(T)",
                "options": [
                  "不限",
                  "3.5T",
                  "4.5T",
                  "5.5T",
                  "6.5T",
                  "7.5T",
                  "8.5T",
                  "10.5T",
                  "12T",
                  "16T"
                ]
              }
            ]
          },
          {
            "autoSpecie": "多功能商务车",
            "filters": [
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "Sunray V4",
                  "Sunray V5",
                  "Sunray V6"
                ]
              },
              {
                "selectKey": "车辆用途",
                "options": [
                  "不限",
                  "passenger version",
                  "cargo version",
                  "chassis ambulance",
                  "School bus",
                  "refrigerated van",
                  "other refitted vans"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "座位数",
                "options": [
                  "不限",
                  "3",
                  "4~11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  ">18"
                ]
              }
            ]
          },
          {
            "autoSpecie": "皮卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "L",
                  "R"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "4×4"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "轴距(mm)",
                "options": [
                  "不限",
                  "3090",
                  "3380"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "AT",
                  "MT"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "T6",
                  "T8"
                ]
              },
              {
                "selectKey": "燃料类型",
                "options": [
                  "不限",
                  "Gasoline",
                  "Diesel",
                  "HEV",
                  "LNG",
                  "CNG"
                ]
              }
            ]
          },
          {
            "autoSpecie": "小卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "X100",
                  "X200",
                  "X300"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "轴距(mm)",
                "options": [
                  "不限",
                  "2740",
                  "2640",
                  "2600",
                  "2850"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "X100",
                  "X200",
                  "X300"
                ]
              },
              {
                "selectKey": "燃料类型",
                "options": [
                  "不限",
                  "Gasoline",
                  "Diesel",
                  "HEV",
                  "LNG",
                  "CNG"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源小卡",
            "filters": [
              {
                "selectKey": "续航里程",
                "options": [
                  "不限",
                  "≤200Km",
                  ">200-250Km",
                  ">250-300Km",
                  ">300-400Km",
                  ">400km"
                ]
              },
              {
                "selectKey": "充电标准",
                "options": [
                  "不限",
                  "GB",
                  "CCCombo",
                  "CHAdeMO"
                ]
              },
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "X200",
                  "X5"
                ]
              },
              {
                "selectKey": "轴距范围",
                "options": [
                  "不限",
                  ">2000-3000",
                  ">3000-3500",
                  ">3500-4200",
                  ">3500-4200",
                  ">5000"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "I3"
                ]
              },
              {
                "selectKey": "厂定最大总质量",
                "options": [
                  "不限",
                  "≤3.5T",
                  ">3.5-5.5T",
                  ">5.5-7.5T",
                  ">7.5-10T",
                  ">10T"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源轻卡",
            "filters": [
              {
                "selectKey": "续航里程",
                "options": [
                  "不限",
                  "≤200Km",
                  ">200-250Km",
                  ">250-300Km",
                  ">300-400Km",
                  ">400km"
                ]
              },
              {
                "selectKey": "充电标准",
                "options": [
                  "不限",
                  "GB",
                  "CCCombo",
                  "CHAdeMO"
                ]
              },
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "808-Single",
                  "808-King",
                  "808-Double",
                  "N Series-Single",
                  "N Series-King",
                  "N Series-Double",
                  "V Series-Single",
                  "V Series-King",
                  "V Series-Double",
                  "K Series-Single",
                  "K Series-King",
                  "K Series-Double"
                ]
              },
              {
                "selectKey": "轴距范围",
                "options": [
                  "不限",
                  ">2000-3000",
                  ">3000-3500",
                  ">3500-4200",
                  ">4200-5000",
                  ">5000"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "I5"
                ]
              },
              {
                "selectKey": "厂定最大总质量",
                "options": [
                  "不限",
                  "≤3.5T",
                  ">3.5-5.5T",
                  ">5.5-7.5T",
                  ">7.5-10T",
                  ">10T"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源多功能商务车",
            "filters": [
              {
                "selectKey": "续航里程",
                "options": [
                  "不限",
                  "≤200Km",
                  ">200-250Km",
                  ">250-300Km",
                  ">300-400Km",
                  ">400km"
                ]
              },
              {
                "selectKey": "充电标准",
                "options": [
                  "不限",
                  "GB",
                  "CCCombo",
                  "CHAdeMO"
                ]
              },
              {
                "selectKey": "轴距范围",
                "options": [
                  "不限",
                  ">2000-3000",
                  ">3000-3500",
                  ">3500-4200",
                  ">4200-5000",
                  ">5000"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "I6"
                ]
              },
              {
                "selectKey": "厂定最大总质量",
                "options": [
                  "不限",
                  "≤3.5T",
                  ">3.5-5.5T",
                  ">5.5-7.5T",
                  ">7.5-10T",
                  ">10T"
                ]
              },
              {
                "selectKey": "左右舵",
                "options": [
                  "不限",
                  "L",
                  "R"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源皮卡",
            "filters": [
              {
                "selectKey": "续航里程",
                "options": [
                  "不限",
                  "≤200Km",
                  ">200-250Km",
                  ">250-300Km",
                  ">300-400Km",
                  ">400km"
                ]
              },
              {
                "selectKey": "充电标准",
                "options": [
                  "不限",
                  "GB",
                  "CCCombo",
                  "CHAdeMO"
                ]
              },
              {
                "selectKey": "轴距范围",
                "options": [
                  "不限",
                  ">2000-3000",
                  ">3000-3500",
                  ">3500-4200",
                  ">4200-5000",
                  ">5000"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "I6"
                ]
              },
              {
                "selectKey": "厂定最大总质量",
                "options": [
                  "不限",
                  "≤3.5T",
                  ">3.5-5.5T",
                  ">5.5-7.5T",
                  ">7.5-10T"
                ]
              },
              {
                "selectKey": "左右舵",
                "options": [
                  "不限",
                  "L",
                  "R"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "4×4"
                ]
              }
            ]
          },
          {
            "autoSpecie": "窄体中重卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "K3",
                  "K5",
                  "K7",
                  "A5"
                ]
              },
              {
                "selectKey": "发动机品牌",
                "options": [
                  "不限",
                  "Cummins",
                  "Weichai",
                  "Yuchai",
                  "FAWDE",
                  "Yunnei",
                  "MC"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "6×2",
                  "6×4",
                  "8×4",
                  "10×4"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "Narrow Cargo",
                  "Narrow Dumper",
                  "Narrow Tractor",
                  "Narrow Mixer"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "AMT",
                  "MT"
                ]
              },
              {
                "selectKey": "前进档位数",
                "options": [
                  "不限",
                  "6",
                  "8",
                  "9",
                  "10",
                  "12",
                  "16"
                ]
              }
            ]
          },
          {
            "autoSpecie": "中体中重卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "K3",
                  "K5",
                  "K7",
                  "A5"
                ]
              },
              {
                "selectKey": "发动机品牌",
                "options": [
                  "不限",
                  "Cummins",
                  "Weichai",
                  "Yuchai",
                  "FAWDE",
                  "Yunnei",
                  "MC"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "6×2",
                  "6×4",
                  "8×4",
                  "10×4"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "Mid-size Cargo",
                  "Mid-size Dumper",
                  "Mid-size Tractor",
                  "Mid-size Mixer"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "AMT",
                  "MT"
                ]
              },
              {
                "selectKey": "前进档位数",
                "options": [
                  "不限",
                  "6",
                  "8",
                  "9",
                  "10",
                  "12",
                  "16"
                ]
              }
            ]
          },
          {
            "autoSpecie": "宽体中重卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "K3",
                  "K5",
                  "K7",
                  "A5"
                ]
              },
              {
                "selectKey": "发动机品牌",
                "options": [
                  "不限",
                  "Cummins",
                  "Weichai",
                  "Yuchai",
                  "FAWDE",
                  "Yunnei",
                  "MC"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "6×2",
                  "6×4",
                  "8×4",
                  "10×4"
                ]
              },
              {
                "selectKey": "排放标准",
                "options": [
                  "不限",
                  "Euro I",
                  "Euro II",
                  "Euro III",
                  "Euro IV",
                  "Euro V",
                  "Euro VI",
                  "L6",
                  "L7"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "Wide Cargo",
                  "Wide Dumper",
                  "Wide Tractor",
                  "Wide Mixer"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "AMT",
                  "MT"
                ]
              },
              {
                "selectKey": "前进档位数",
                "options": [
                  "不限",
                  "6",
                  "8",
                  "9",
                  "10",
                  "12",
                  "16"
                ]
              }
            ]
          },
          {
            "autoSpecie": "新能源中重卡",
            "filters": [
              {
                "selectKey": "驾驶室形式",
                "options": [
                  "不限",
                  "K3",
                  "K5",
                  "K7",
                  "A5"
                ]
              },
              {
                "selectKey": "发动机品牌",
                "options": [
                  "不限",
                  "Cummins",
                  "Weichai",
                  "Yuchai",
                  "FAWDE",
                  "Yunnei",
                  "MC"
                ]
              },
              {
                "selectKey": "驱动形式",
                "options": [
                  "不限",
                  "4×2",
                  "6×2",
                  "6×4",
                  "8×4",
                  "10×4"
                ]
              },
              {
                "selectKey": "产品平台",
                "options": [
                  "不限",
                  "Narrow Cargo",
                  "Narrow Dumper",
                  "Narrow Tractor",
                  "Narrow Mixer"
                ]
              },
              {
                "selectKey": "变速器型式",
                "options": [
                  "不限",
                  "AMT",
                  "MT"
                ]
              },
              {
                "selectKey": "前进档位数",
                "options": [
                  "不限",
                  "6",
                  "8",
                  "9",
                  "10",
                  "12",
                  "16"
                ]
              }
            ]
          }
        ],
        filters: [],
        radioArray: [],
        queryParams: {
          pageNum: 1,
          pageSize: 10,
        },
        // 总条数
        total: 0,
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        //车系 //产品平台
        autoSeriesArray: [],
        //排放标准
        emissionStandardsArray: [],
        //排量单位
        engineCapacityUnitArray: ["T", "VVT"],
        //变速器型式
        gearboxArray: [],
        //目标市场
        targetMarketArray: ["智利", "尼日利亚", "GCC"],
        //已售市场
        soldMarketArray: [],
        //可售市场
        availableMarketArray: [],
        dialogImageUrl: '',
        dialogVisible: false,
        uploadFlag: false,
        headers: {
          Authorization: 'Bearer ' + getToken()
        },
        form: {
          id: undefined,
          autoName: undefined,
          autoSeries: undefined,
          emissionStandards: undefined,
          engineCapacity: undefined,
          engineCapacityUnit: undefined,
          gearbox: undefined,
          altitude: undefined,
          temperature: undefined,
          targetMarket: undefined,
          soldMarket: undefined,
          availableMarket: undefined,
          autoSpecies: undefined,
          autoType: undefined,
          structuralDistinctionNumber: undefined,

          targetMarkets: [],
          soldMarkets: [],
          availableMarkets: [],
          fileList: [],
          file: undefined,
        },
        list: [],
        rules:{
          autoSeries: [{required: true, message: "产品平台必选", trigger: "change"}],
          structuralDistinctionNumber: [{required: true, message: "结构区别号必填", trigger: "blur"}]
        },
      };
    },

    methods: {
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        let id = row.id;
        getOne(id).then(response => {
          if (200 == response.code) {
            debugger
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
        this.form.autoName = data.autoName;
        this.form.autoSeries = data.autoSeries;
        this.form.emissionStandards = data.emissionStandards;
        this.form.engineCapacity = data.engineCapacity;
        this.form.engineCapacityUnit = data.engineCapacityUnit;
        this.form.gearbox = data.gearbox;
        this.form.altitude = data.altitude;
        this.form.temperature = data.temperature;
        this.$set(this.form, "targetMarkets", null != data.targetMarket && '' != data.targetMarket ? data.targetMarket.split(",") : []);
        this.$set(this.form, "soldMarkets", null != data.soldMarket && '' != data.soldMarket ? data.soldMarket.split(",") : []);
        this.$set(this.form, "availableMarkets", null != data.availableMarket && '' != data.availableMarket ? data.availableMarket.split(",") : []);
        this.form.structuralDistinctionNumber = data.structuralDistinctionNumber;

        let obj = {};
        obj.url = data.autoImage;
        this.form.fileList = [];
        if (obj.url != undefined && obj.url != "" && obj.url != null) {
          this.form.fileList.push(obj);
        }
      },

      handleDelete(item) {
        this.$confirm('确认删除车型"' + item.autoName + '"吗?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          debugger
          return deleteSingle(item.id);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function () {
        });
      },


      getList() {
        list(this.queryParams).then(response => {
            debugger
            this.loading = false;
            if (200 == response.code) {
              this.total = response.data.total;
              this.list = response.data.list;
            } else {
              this.$message.error(response.msg);
            }
          }
        );
      },


      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemovePicture(file, fileList) {
        this.form.file = "";
        this.form.fileList = [];
      },
      imageChange(file, fileList) {
        const isLt1M = file.size < 1024 * 1024 * 1;
        if (!isLt1M) {
          this.$message.error('上传图片大小不能超过 1MB!');
          this.form.fileList = [];
        } else {
          this.form.fileList = fileList;
        }
        let ff = file.raw;
        const isImage = ff.type == 'image/png' || ff.type == 'image/jpg' || ff.type == 'image/jpeg' || ff.type == 'image/bmp' || ff.type == 'image/gif' || ff.type == 'image/webp';
        if (!isImage) {
          this.$message.error('上传只能是png,jpg,jpeg,bmp,gif,webp格式!');
          this.form.fileList = [];
        }
      },

      confirm(form) {
        this.$refs["form"].validate((valid) => {
          if (valid) {
            let data = new FormData();
            let imageFile;
            if(this.form.fileList.length <= 0)
            {
              this.$message({
                type: 'error',
                message: '图片必传'
              })
              return;
            }
            if (this.form.fileList.length > 0) {
              imageFile = this.form.fileList[0].raw;
              // 文件对象
              data.append("file", imageFile);
            }

            let param = {
              id: this.form.id,
              autoName: this.form.autoName,
              autoSeries: this.form.autoSeries,
              emissionStandards: this.form.emissionStandards,
              engineCapacity: this.form.engineCapacity,
              engineCapacityUnit: this.form.engineCapacityUnit,
              gearbox: this.form.gearbox,
              altitude: this.form.altitude,
              temperature: this.form.temperature,
              targetMarket: 0 === this.form.targetMarkets.length ? undefined : this.form.targetMarkets.join(","),
              soldMarket: this.form.soldMarkets.length ? undefined : this.form.soldMarkets.join(","),
              availableMarket: this.form.availableMarkets.length ? undefined : this.form.availableMarkets.join(","),
              autoSpecies: this.form.autoSpecies,
              autoType: this.form.autoType,
              structuralDistinctionNumber: this.form.structuralDistinctionNumber,
            };
            //参数
            data.append('autoManageJson', JSON.stringify(param));

            addAndUpload(data).then(rsp => {
              this.$message({
                type: 'success',
                message: '操作成功'
              })
              this.dialogVisible = false;
              this.open = false;
              this.getList();
            }).catch(error => {
              this.loading = false;
            })
          } else {
            return false;
          }
        })
      },

      handleNodeClick(data) {
        this.$set(this, "filters", []);
        this.$set(this, "radioArray", []);
        if (undefined === data || 'category' === data.menuType) {
          this.$set(this.form, "autoType", data.label);
          this.$set(this, "list", []);
          this.$set(this.form, "autoSpecies", undefined);
          return;
        }
        this.productSelectParam.forEach(item => {
          if (item.autoSpecie === data.label) {
            this.$set(this, "filters", item.filters);
            this.$set(this.form, "autoSpecies", data.label);
            this.$set(this.queryParams, "autoSpecies", data.label);
          }
        });

        if (undefined != this.form.autoSpecies) {
          this.productMenu.forEach(item => {
              item.children.forEach(it => {
                if (it.label === this.form.autoSpecies) {
                  this.$set(this.queryParams, "autoType", item.label);
                  this.$set(this.form, "autoType", item.label);
                  return;
                }
              })
            }
          )
        }


        this.autoSeriesArray = [];
        this.filters.forEach(item => {
          if (item.selectKey === "产品平台") {
            item.options.forEach(op => {
              if ("不限" != op) {
                this.autoSeriesArray.push(op);
              }
            })
          }
          ;

          this.emissionStandardsArray = [];
          if (item.selectKey === "排放标准") {
            item.options.forEach(op => {
              if ("不限" != op) {
                this.emissionStandardsArray.push(op);
              }
            })
          }
          ;

          this.gearboxArray = [];
          if (item.selectKey === "变速器型式") {
            item.options.forEach(op => {
              if ("不限" != op) {
                this.gearboxArray.push(op);
              }
            })
          }
          this.radioArray.push("不限");
        })
        this.getList();
      },

      changeQueryParam() {
        console.log(this.radioArray);
        debugger
      },

      handleAdd() {
        if (undefined === this.form.autoSpecies) {
          this.$message.warning("请选择车型");
          return;
        }

        this.reset();
        this.open = true;
        this.title = "添加";
      },
      // 取消按钮
      cancel() {
        this.$refs['form'].clearValidate();
        this.open = false;
        this.reset();
      },

      reset() {
        this.form.autoName = undefined,
          this.form.autoSeries = undefined,
          this.form.emissionStandards = undefined,
          this.form.engineCapacity = undefined,
          this.form.engineCapacityUnit = undefined,
          this.form.gearbox = undefined,
          this.form.altitude = undefined,
          this.form.temperature = undefined,
          this.form.targetMarket = undefined,
          this.form.soldMarket = undefined,
          this.form.availableMarket = undefined,
          this.form.structuralDistinctionNumber = undefined,
          this.form.targetMarkets = [],
          this.form.soldMarkets = [],
          this.form.availableMarkets = [],
          this.form.file = "",
          this.form.fileList = []
      }
    }
  }
</script>

<style>

  .text {
    font-size: 12px;
  }

  .item {
    margin-bottom: 18px;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>
