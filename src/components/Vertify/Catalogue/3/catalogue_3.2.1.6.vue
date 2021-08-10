<template>
  <div>
      <label for='input-one'>
        Normal engine idling speed:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_3_2_1_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_3.2.1.6"
  }
</script>
