<template>
  <div>
    <div>
      <label for='input-one'>
        Drawing(s)/photograph(s) showing the position of the camera(s) relative to the vehicle structure:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.1"
  }
</script>
