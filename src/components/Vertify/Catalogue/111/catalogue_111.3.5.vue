<template>
  <div>
      <label for='input-one'>
        Gas combination rate (in percent):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.5"
  }
</script>
