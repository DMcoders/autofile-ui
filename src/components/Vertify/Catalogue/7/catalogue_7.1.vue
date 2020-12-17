<template>
  <div>
    <label for='input-one'>
      Schematic diagram of steered axle(s) showing steering geometry：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sdosassg: $event.target.value})">
      See annex C
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.1"
  }
</script>
