<template>
  <div>
      <label for='input-one'>
        Location of statutory plates and inscription and method of affixing:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_0_7: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.0.7"
  }
</script>
