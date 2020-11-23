<template>
  <div>
    <label for='input-one'>
      For chassis without bodywork：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {fcwithoutb: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1"
  }
</script>
