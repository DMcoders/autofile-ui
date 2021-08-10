<template>
  <div>
      <label for='input-one'>
        Power absorbed by the auxiliaries needed for operating the engine as specified in and under the operation conditions of UN Regulation No 85,
        Annex 5, paragraph 2.3.1:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.4"
  }
</script>
