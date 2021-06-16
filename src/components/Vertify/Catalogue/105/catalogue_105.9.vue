<template>
  <div>
    <div>
      <label for='input-one'>
        Driving cab (forward control or bonneted):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_9: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.9"
  }
</script>
