<template>
  <div>
    <label for='input-one'>
      Minimum mass of the completed vehicle as stated by the manufacturer, in the case if an incomplete vehicle
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mmotcvasbtm: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.7.(R13)"
  }
</script>
