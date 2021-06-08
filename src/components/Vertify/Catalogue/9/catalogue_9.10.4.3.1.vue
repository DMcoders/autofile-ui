<template>
  <div>
    <label for='input-one'>
      A detailed description of the head restraint, specifying in particular the nature of the padding material or materials used and, where applicable, the position and specification of the braces and anchorage pieces for the type or types of seats for which approval is sought:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910431: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.3.1"
  }
</script>
