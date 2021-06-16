<template>
  <div>
    <div>
      <label for='input-one'>
        For chassis without bodywork:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_11_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.11.1"
  }
</script>
