<template>
  <div>
    <label for='input-one'>
      In case of a special device, full description and/or drawing of the rear under-run protection (including mountings and fittings), or, if approved as separate technical unit, typeapproval number:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {icoasd: $event.target.value})">

    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.15.2"
  }
</script>
