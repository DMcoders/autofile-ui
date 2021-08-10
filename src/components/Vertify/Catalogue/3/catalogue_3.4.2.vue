<template>
  <div>
    <label for='input-one'>
      Category of hybrid electric vehicle: off-vehicle charging/not off-vehicle charging:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {cohev: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.2"
  }
</script>
