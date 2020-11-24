<template>
  <div>
    <label for='input-one'>
      Pressure charger(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pressurecharger: $event.target.value})">
      Yes
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.6.(R51)"
  }
</script>
