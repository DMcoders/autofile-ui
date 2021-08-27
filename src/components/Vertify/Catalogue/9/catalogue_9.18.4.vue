<template>
  <div>
    <label for='input-one'>
      Particulars of the nominal value of the direct current resistances, and, in the case of resistive ignition cables, of their nominal resistance per meter:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {potnvotdcr: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.18.4"
  }
</script>
