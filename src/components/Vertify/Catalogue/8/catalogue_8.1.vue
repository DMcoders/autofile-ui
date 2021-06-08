<template>
  <div>
    <label for='input-one'>
      Type and characteristics of the brakes (as defined in item 2.6. of ECE - R13H) with a drawing, (e.g. drums or discs, wheels braked, connection to braked wheels, make and type of shoe/pad assemblies and/or linings, effective braking areas, radius of drums, shoes or discs, mass of drums, adjusment devices relevant parts of the axle(s) and suspension, etc.：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tacotb: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.1"
  }
</script>
