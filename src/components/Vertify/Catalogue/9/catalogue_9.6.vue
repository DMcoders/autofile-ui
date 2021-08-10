<template>
  <div>
    <label for='input-one'>
      Windscreen wiper(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_6: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.6"
  }
</script>
