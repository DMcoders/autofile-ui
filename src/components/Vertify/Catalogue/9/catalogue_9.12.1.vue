<template>
  <div>
    <label for='input-one'>
      Number and position of safety belts and restraint systems and seats on which they can be used:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9121: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.12.1"
  }
</script>
