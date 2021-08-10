<template>
  <div>
      <label for='input-one'>
        Sectional drawing of the heat exchanger or the parts respectively where the heat exchange takes place, indicating the thickness of the wall, materials used and the characteristics of the surface:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_2_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.2.3"
  }
</script>
