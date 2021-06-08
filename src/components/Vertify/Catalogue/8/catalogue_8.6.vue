<template>
  <div>
    <label for='input-one'>
      Calculation and curves according to the appendix to item 1.1.4.2 of annex II to directive 71/320/EEC (or the appendix to annex XI, if applicable) :
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {cacatta: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.6"
  }
</script>
