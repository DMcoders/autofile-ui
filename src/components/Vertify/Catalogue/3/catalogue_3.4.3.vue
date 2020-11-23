<template>
  <div>
    <label for='input-one'>
      Operating mode switch: with/without 9/：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {oms: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3"
  }
</script>
