<template>
  <div>
    <label for='input-one'>
      Alarm system, if any:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1222: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.2"
  }
</script>
