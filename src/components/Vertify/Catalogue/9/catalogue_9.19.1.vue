<template>
  <div>
    <label for='input-one'>
      Drawing of the vehicle parts relevant to the lateral protection, i.e. drawing of the vehicle and/or chassis with position and mounting of the axle(s), drawing of the mountings and/or the fittings of lateral protection device(s). If the lateral protection is achieved without lateral protection device(s) the drawing shall clearly show that the required dimensions are met:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotvprttip: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.19.1"
  }
</script>
