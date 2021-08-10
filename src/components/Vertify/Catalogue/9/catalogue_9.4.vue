<template>
  <div>
    <label for='input-one'>
      Field of vision:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_4: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.4"
  }
</script>
