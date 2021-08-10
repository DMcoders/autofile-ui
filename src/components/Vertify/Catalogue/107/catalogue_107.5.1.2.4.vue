<template>
  <div>
      <label for='input-one'>
        Axle 4:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_5_1_2_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.5.1.2.4"
  }
</script>
