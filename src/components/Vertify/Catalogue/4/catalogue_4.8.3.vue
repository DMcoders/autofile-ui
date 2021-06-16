<template>
  <div>
    <label for='input-one'>
      Tolerance of the measuring mechanism (pursuant to item 2.2.3 of ECE-R39)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_4_8_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.3"
  }
</script>
