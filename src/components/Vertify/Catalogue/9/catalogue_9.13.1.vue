<template>
  <div>
    <label for='input-one'>
      Photographs and/or drawings of the bodywork showing the position and dimensions of the actual and the effective anchorages including the R-points:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9131: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.13.1"
  }
</script>
