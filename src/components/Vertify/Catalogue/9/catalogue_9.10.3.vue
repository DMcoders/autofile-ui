<template>
  <div>
    <label for='input-one'>
      Seats:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {seats: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3"
  }
</script>
