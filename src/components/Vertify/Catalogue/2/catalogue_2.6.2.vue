<template>
  <div>
    <label for='input-one'>
      Mass of the optional equipment (see definition No 5 of Article 2 of Regulation (EU) No 1230/2012
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {motoe: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.6.2"
  }
</script>
