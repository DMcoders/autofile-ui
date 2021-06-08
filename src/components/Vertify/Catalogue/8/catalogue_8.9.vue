<template>
  <div>
    <label for='input-one'>
      Brief description of the braking systems (according to item 1.6 of annex IX, Appendix 1 to Directive 71/320/EEC):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotbs: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.9"
  }
</script>
