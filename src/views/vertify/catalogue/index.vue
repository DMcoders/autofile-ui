<div id="0">
  GENERAL
</div>

<div id="0.1">
  <el-row>
  <el-form-item label="Make(trade name of manufacture)" prop="tradeName">
    <el-input
      v-model="tradeName"
      clearable
      size="small"
      style="width: 240px"
    />
  </el-form-item>
  </el-row>
</div>


<div id="0.2">
  <div> Type and general commercial description(s)</div>
  <el-row>
    <el-form-item label="Type" prop="type">
      <el-input
        v-model="dictName"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>


  <el-row>
    <el-form-item label="Variant" prop="variant">
      <el-input
        v-model="variant"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
    <el-form-item label="See annex A">
    </el-form-item>
  </el-row>

  <el-row>
    <el-form-item label="Version" prop="version">
      <el-input
        v-model="version"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
    <el-form-item label="See annex A">
    </el-form-item>
  </el-row>
</div>


<div id="0.2.1">
  <el-row>
    <el-form-item label="Commercial description(s)" prop="description">
      <el-input
        v-model="description"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>

<div id="0.3">
  <el-row>
    <el-form-item label="Means of identification of type, if marked on the vehicle" prop="moiot">
      <el-input
        v-model="moiot"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>


<div id="0.3.1">
  <el-row>
    <el-form-item label="Location of that marking" prop="lotm">
      <el-input
        v-model="lotm"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>

<div id="0.3.1.1">
  <el-row>
    <el-form-item label="Chassis" prop="chassis">
      <el-input
        v-model="chassis"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>

<div id="0.3.1.2">
  <el-row>
    <el-form-item label="Bodywork/complete  vehicle" prop="bcVehicle">
      <el-input
        v-model="bcVehicle"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>

<div id="0.4">
  <el-row>
    <el-form-item label="Category of vehicle" prop="categoryOfVehicle">
      <el-input
        v-model="categoryOfVehicle"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>

<div id="0.5">
  <el-row>
    <el-form-item label="Name and address of manufacture" prop="naaom">
      <el-input
        v-model="naaom"
        clearable
        size="small"
        style="width: 240px"
      />
    </el-form-item>
  </el-row>
</div>
