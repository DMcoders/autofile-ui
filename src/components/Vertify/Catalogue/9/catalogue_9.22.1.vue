<template>
  <div>
    <label for='input-one'>
      Drawing of the vehicle parts relevant to the front under-run protection, i.e. drawing of the vehicle and/or chassis with position and mounting and/or fitting of the front under-run protection. If the under-run protection is no special device, the drawing shall clearly show that the required dimensions are met:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotvprttfup: $event.target.value})">

    </label>
    See annex I
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22.1"
  }
</script>
