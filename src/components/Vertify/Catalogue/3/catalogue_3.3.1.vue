<template>
  <div>
    <label for='input-one'>
      Type (winding, excitation)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type331: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1"
  }
</script>
