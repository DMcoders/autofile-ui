<template>
  <div>
    <label for='input-one'>
      Number of seating positions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {numberofseatingpositions: $event.target.value})">

    </label>
    3 seats
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.1"
  }
</script>
