<template>
  <div>
    <label for='input-one'>
      Technically permissible maximum towable mass of the towing vehicle：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tpmtmottv: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11"
  }
</script>
