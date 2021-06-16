<template>
  <div>
    <label for='input-one'>
      Service fuel tank(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type104_3_2_3_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_104.3.2.3.1",
  }
</script>
