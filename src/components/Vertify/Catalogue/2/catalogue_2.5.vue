<template>
  <div>
    <label for='input-one'>
      Minimum mass on the steering axle(s) for incomplete：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mmotsafi: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.5"
  }
</script>
