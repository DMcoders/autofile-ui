<template>
  <div>
    <label for='input-one'>
      Table and drawing of radio interference control equipment:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {tadorice: $event.target.value})">

    </label>
    See annex D
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.18.3"
  }
</script>
