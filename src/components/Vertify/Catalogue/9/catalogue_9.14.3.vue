<template>
  <div>
    <label for='input-one'>
      Distance of the centre line from the longitudinal median plane of the vehicle:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotclftlmpotv: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.14.3"
  }
</script>
