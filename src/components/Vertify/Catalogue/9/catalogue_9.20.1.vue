<template>
  <div>
    <label for='input-one'>
      Brief description of the vehicle with regard to its spray-suppressio system and the constituent components:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {bdotvwrtiss: $event.target.value})">

    </label>
    See annex B
    <label for='input-two'>
      Detailed drawings of the spray-suppression system and its position on the vehicle showing the dimensions specified in figures in Annex III to Directive 91/226/EEC and taking account of the extremes of tyre/wheel combinations:      <input id='input-two'
             v-bind:value='value'
             v-on:input="$emit('input', {ddotss: $event.target.value})">

    </label>
    See annex B
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.1"
  }
</script>
