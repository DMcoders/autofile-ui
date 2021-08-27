<template>
  <div>
      <label for='input-one'>
        Characteristics of the springing parts of the suspension (design, characteristics of the materials and dimensions):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_6_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.6.3"
  }
</script>
