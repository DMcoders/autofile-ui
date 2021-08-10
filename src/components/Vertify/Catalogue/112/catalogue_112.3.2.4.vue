<template>
  <div>
      <label for='input-one'>
        Specifications shall be given for further important components of the heating system, such as e.g. the heater fan, with regard to their method of construction and technical data:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_2_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.2.4"
  }
</script>
