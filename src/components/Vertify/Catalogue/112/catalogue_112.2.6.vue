<template>
  <div>
      <label for='input-one'>
        Nominal setting of the engine temperature control mechanism:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.6"
  }
</script>
