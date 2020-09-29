<template>
    <div>
      <label for='input-one'>
        Make(trade name of manufacture)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tnom: $event.target.value})">
      </label>
    </div>
</template>

<!--<template>-->
<!--  <div>-->
<!--      <el-form-item label="Make(trade name of manufacture)：">-->
<!--        <el-input/>-->
<!--      </el-form-item>-->
<!--  </div>-->
<!--</template>-->


<script>
  export default {
    name: "catalogue_01",
    props: ['value']
  }
</script>
