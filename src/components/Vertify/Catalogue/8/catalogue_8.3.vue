<template>
  <div>
    <label for='input-one'>
      Control and transmission of trailer braking systems in vehicles designed to pull a trailer:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {catotbs: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.3"
  }
</script>
