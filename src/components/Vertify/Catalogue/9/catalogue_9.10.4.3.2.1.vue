<template>
  <div>
    <label for='input-one'>
      A detailed description of the structural zone to which the head restraint is intended to be fixed:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9104321: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.3.2.1"
  }
</script>
