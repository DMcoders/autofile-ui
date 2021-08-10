<template>
  <div>
      <label for='input-one'>
        Description or drawing(s) or picture(s) of the installation of the REESS in the vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.6"
  }
</script>
