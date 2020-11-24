<template>
  <div>
    <label for='input-one'>
      Type(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type232322: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.2.2"
  }
</script>
