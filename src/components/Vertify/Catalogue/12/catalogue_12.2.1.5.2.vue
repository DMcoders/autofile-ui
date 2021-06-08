<template>
  <div>
    <label for='input-one'>
      For immobilizers not yet approved:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type122152: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5.2"
  }
</script>
