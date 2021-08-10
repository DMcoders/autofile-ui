<template>
  <div>
    <label for='input-one'>
      Volume of luggage compartments:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_13_7: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_13.7"
  }
</script>
