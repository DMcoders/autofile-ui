<template>
  <div>
    <label for='input-one'>
      Designation of the types of safety belt authorized for fitting to the anchorages with which the vehicle is equipped:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9133: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.13.3"
  }
</script>
