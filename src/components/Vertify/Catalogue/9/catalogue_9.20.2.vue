<template>
  <div>
    <label for='input-one'>
      Detailed drawings of the spray-suppression system and its position on the vehicle showing the dimensions specified in the figures in Annex VI to Commission Regulation (EU) No 109/2011 and taking account of the extremes of tyre/wheel combinations:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_20_2: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.2"
  }
</script>
