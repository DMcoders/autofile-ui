<template>
  <div>
    <div>
      <label for='input-one'>
        Details of the method of attachment of the camera-monitor device(s) including that part of the vehicle structure to which it is attached:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_5: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.5"
  }
</script>
