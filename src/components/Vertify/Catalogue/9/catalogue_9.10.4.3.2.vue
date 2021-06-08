<template>
  <div>
    <label for='input-one'>
      In the case of a ‘separate’ head restraint:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910432: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.3.2"
  }
</script>
