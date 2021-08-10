<template>
  <div>
      <label for='input-one'>
        Description or drawing(s) or picture(s) of the REESS explaining:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.3"
  }
</script>
