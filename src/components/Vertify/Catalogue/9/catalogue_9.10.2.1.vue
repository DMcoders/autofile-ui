<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the arrangement of symbols and controls, tell-tales and indicators:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {padot91021: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.2.1"
  }
</script>
