<template>
  <div>
    <label for='input-one'>
      Detailed drawings of the spray-suppression system and its position on the vehicle showing the dimensions specified in figures in Annex III to Directive 91/226/EEC and taking account of the extremes of tyre/wheel combinations:      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ddotss: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.1.1"
  }
</script>
