<template>
  <div>
    <label for='input-one'>
      Air-suspension for driving axle(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {asfda: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.2.3"
  }
</script>
