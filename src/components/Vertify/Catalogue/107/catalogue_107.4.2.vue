<template>
  <div>
      <label for='input-one'>
        Gear ratios:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_4_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.4.2"
  }
</script>
