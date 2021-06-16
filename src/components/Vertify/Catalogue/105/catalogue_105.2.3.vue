<template>
  <div>
      <label for='input-one'>
        Version:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_2_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_105.2.3"
  }
</script>
