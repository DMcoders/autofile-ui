<template>
  <div>
    <label for='input-one'>
      To the left : Number of turns of the steering wheel (or equivalent data) ：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ttl: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.3.2"
  }
</script>
