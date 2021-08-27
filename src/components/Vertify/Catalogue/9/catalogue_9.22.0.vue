<template>
  <div>
    <label for='input-one'>
      Presence (yes/no/incomplete):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_22_0: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22.0"
  }
</script>
