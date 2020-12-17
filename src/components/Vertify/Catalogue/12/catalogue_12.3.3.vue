<template>
  <div>
    <label for='input-one'>
      Drawing or photograph of the chassis/area of the vehicle body showing the position, construction and mounting of the towing device(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dopotcotvbstp: $event.target.value})">
    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.3.3"
  }
</script>
