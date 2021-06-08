<template>
  <div>
    <label for='input-one'>
      Mass:.. kg：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type3322: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.2.2"
  }
</script>
