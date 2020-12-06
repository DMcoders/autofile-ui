<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetTableData="handleSetTableData" />

    <el-row style="background:#fff;margin-bottom:32px;">
      <el-table
        v-if="type==='write'"
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
          prop="exprotCoutry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exprotCoutry }}</span>
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
          prop="createDate"
          min-width="15%">
          <template slot-scope="scope">
            {{parseTime(scope.row.createDate,'{y}-{m}-{d}')}}
          </template>
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)">填写</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-if="type==='audit'"
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
          prop="exprotCoutry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exprotCoutry }}</span>
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
              @click="handleDelete(scope.$index, scope.row)">审核</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-if="type==='noPass'"
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
          prop="exprotCoutry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exprotCoutry }}</span>
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
          prop="suggest"
          min-width="15%">
        </el-table-column>
        <el-table-column
          min-width="15%" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        v-if="type==='pass'"
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
          prop="exprotCoutry"
          min-width="15%">
          <template slot-scope="scope">
            <span style="color:#36a3f7">{{ scope.row.exprotCoutry }}</span>
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
              @click="handleDelete(scope.$index, scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './dashboard/PanelGroup'


export default {
  name: 'Index',
  components: {
    PanelGroup,
  },
  data() {
    return {
      type:"write",
      writeData: [{
        certificationName: 'U7342',
        autoSeries: 'J7',
        exprotCoutry: '秘鲁',
        fileName: 'N7211',
        createDate: '2016-05-04 12:32:12',
      }],
      auditData: [{
        certificationName: 'U7342',
        autoSeries: 'J72',
        exprotCoutry: '秘鲁2',
        fileName: 'N7212',
        createDate: '2016-05-04 12:32:12',
        process:80
      }],
      noPassData: [{
        certificationName: 'U7342',
        autoSeries: 'J73',
        exprotCoutry: '秘鲁3',
        fileName: 'N7213',
        suggest:"参数错误"
      }],
      passData: [{
        certificationName: 'U7342',
        autoSeries: 'J74',
        exprotCoutry: '秘鲁4',
        fileName: 'N7214',
        finishDate: '2020-05-04 12:32:12',
      }],
    }
  },
  methods: {
    handleSetTableData(type) {
      this.type = type;
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
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
