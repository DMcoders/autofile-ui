<template>
  <div>
    <label for='input-one'>
      In the case of special device, full description and/or drawing of the front under-run protection (including mountings and fittings), or, if approved as a separate technical unit, typeapproval number:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {itcosd: $event.target.value})">

    </label>
    See annex I
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22.2"
  }
</script>
