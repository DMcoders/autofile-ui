<template>
  <div>
    <label for='input-one'>
      Type of steering transmission (specify for front and rear, if applicable)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tost: $event.target.value})">
      Recirculating ball Front axle
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.1"
  }
</script>
