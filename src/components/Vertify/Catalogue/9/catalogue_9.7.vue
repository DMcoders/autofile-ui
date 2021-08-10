<template>
  <div>
    <label for='input-one'>
      Windscreen washer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_7: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.7"
  }
</script>
