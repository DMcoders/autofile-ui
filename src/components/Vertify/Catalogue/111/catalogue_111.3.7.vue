<template>
  <div>
      <label for='input-one'>
        Type of thermal management:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_7: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.7"
  }
</script>
