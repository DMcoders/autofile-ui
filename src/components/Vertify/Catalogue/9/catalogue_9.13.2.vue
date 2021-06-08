<template>
  <div>
    <label for='input-one'>
      Drawings of the belt anchorages and parts of the vehicle structure where they are attached (with the material indication):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9132: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.13.2"
  }
</script>
