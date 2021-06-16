<template>
  <div>
    <div>
      <label for='input-one'>
        Devices for indirect vision:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1"
  }
</script>
