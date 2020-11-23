<template>
  <div>
    <label for='input-one'>
      Position of the centre of gravity of the bodywork and/or interior fittings and/or equipment and/or pay-mass (minimum and maximum) :
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {potcg2428: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.8"
  }
</script>
