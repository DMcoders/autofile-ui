<template>
  <div>
      <label for='input-one'>
        Location of statutory plates and inscriptions and method of affixing:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_0_6: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.0.6"
  }
</script>
