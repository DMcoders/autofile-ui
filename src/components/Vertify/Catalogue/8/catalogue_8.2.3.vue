<template>
  <div>
    <label for='input-one'>
      Parking braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pbs: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.3"
  }
</script>
