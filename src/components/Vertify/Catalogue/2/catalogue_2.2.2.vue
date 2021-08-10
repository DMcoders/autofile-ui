<template>
  <div>
    <label for='input-one'>
      In the case of semi-trailer towing vehicles:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_2_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2.2"
  }
</script>
