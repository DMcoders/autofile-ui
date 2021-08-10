<template>
  <div>
    <label for='input-one'>
      Suspension of non-driving axle(s) equivalent to air-suspension:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_6_2_4_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.4.1"
  }
</script>
