<template>
  <div>
    <label for='input-one'>
      Drawing of the vehicle parts relevant to the rear under-run protection, i.e. drawing of the vehicle and/or chassis with position and mounting of the rearmost axle, drawing of the mounting and/or fitting of the rear:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotvprttrup: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.15.1"
  }
</script>
