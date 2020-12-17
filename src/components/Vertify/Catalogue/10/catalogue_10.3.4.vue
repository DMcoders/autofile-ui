<template>
  <div>
    <label for='input-one'>
      Method of operation of concealable lamps:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mooocl: $event.target.value})">
    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.3.4"
  }
</script>
