<template>
  <div>
      <label for='input-one'>
        Cooling system (liquid/air):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_2_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.2.5"
  }
</script>
