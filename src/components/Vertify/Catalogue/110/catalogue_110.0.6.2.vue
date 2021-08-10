<template>
  <div>
      <label for='input-one'>
        On the bodywork:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_0_6_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.0.6.2"
  }
</script>
