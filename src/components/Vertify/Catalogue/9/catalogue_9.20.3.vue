<template>
  <div>
    <label for='input-one'>
      Approval number(s) of spray-suppression device(s), if available:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_20_3: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.3"
  }
</script>
