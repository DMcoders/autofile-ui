<template>
  <div>
      <label for='input-one'>
        Maximum V-value:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_10_3_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.10.3.2"
  }
</script>
