<template>
  <div>
    <label for='input-one'>
      Electrical/pneumatic circuit diagram:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1214: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.1.4"
  }
</script>
