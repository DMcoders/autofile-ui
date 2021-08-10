<template>
  <div>
    <label for='input-one'>
      Suspension of driving axle(s) equivalent to air-suspension:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_6_2_3_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.3.1"
  }
</script>
