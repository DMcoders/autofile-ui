<template>
  <div>
    <label for='input-one'>
      Description of a particular type of safety belt where an anchorage is located in the seat backrest or incorporates an energy dissipating device:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9134: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.13.4"
  }
</script>
