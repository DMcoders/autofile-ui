<template>
  <div>
    <label for='input-one'>
      Angle of inclination:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {angleofinclination: $event.target.value})">

    </label>
    15 degree
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1.3"
  }
</script>
