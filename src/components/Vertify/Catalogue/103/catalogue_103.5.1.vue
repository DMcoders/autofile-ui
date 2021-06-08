<template>
   <div>
      <label for='input-one'>
        Schematic diagram(s) of the steering control(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10351: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.5.1"
  }
</script>
