<template>
  <div>
    <label for='input-one'>
      For chassis with bodywork：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {fcwithb: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2"
  }
</script>
