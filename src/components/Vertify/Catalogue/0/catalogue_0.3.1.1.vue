<template>
  <div>
    <div>
      <label for='input-one'>
        Chassis：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {typr_0_3_1_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.3.1.1"
  }
</script>
