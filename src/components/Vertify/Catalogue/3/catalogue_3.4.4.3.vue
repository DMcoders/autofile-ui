<template>
  <div>
    <label for='input-one'>
      Rated maximum net power: …… kW：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {rmnp: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.4.3"
  }
</script>
