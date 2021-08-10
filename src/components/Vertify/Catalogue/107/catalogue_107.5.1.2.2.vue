<template>
  <div>
      <label for='input-one'>
        Axle 2:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_5_1_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.5.1.2.2"
  }
</script>
