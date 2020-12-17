<template>
  <div>
    <label for='input-one'>
      Type-approval number(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {typeapprovalnumber9542: $event.target.value})">

    </label>
    Refer to Annex E
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.4.2"
  }
</script>
