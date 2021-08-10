<template>
  <div>
      <label for='input-one'>
        A brief description of the vehicle type with regard to the heating system if the cooling air or the exhaust gases of the engine are used as the heat source, including:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_112_3_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_112.3.2"
  }
</script>
