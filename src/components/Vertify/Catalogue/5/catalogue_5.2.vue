<template>
  <div>
    <label for='input-one'>
      Make：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {make52: $event.target.value})">
      Front: JAC
      Rear: HAAC
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.2"
  }
</script>
