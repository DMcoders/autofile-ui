<template>
  <div>
    <label for='input-one'>
      Fuel diesel oil/petrol/LPG/any other:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type104_3_2_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_104.3.2.2"
  }
</script>
