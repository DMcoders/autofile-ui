<template>
  <div>
    <label for='input-one'>
      Width of the widest rear axle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {wotwra: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3.3"
  }
</script>
