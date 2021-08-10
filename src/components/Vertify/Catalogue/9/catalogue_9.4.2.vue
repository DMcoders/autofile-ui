<template>
  <div>
    <label for='input-one'>
      Drawing(s) or photograph(s) showing the location of component parts within the 180?forward field of vision:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_4_2: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.4.2"
  }
</script>
