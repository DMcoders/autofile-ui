<template>
  <div>
    <label for='input-one'>
      Light-duty vehicles (Diesel/Petrol/LPG/NG or Biomethane/Ethanol (E85)/Biodiesel/ Hydrogen):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_2_2_1: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.2.2.1"
  }
</script>
