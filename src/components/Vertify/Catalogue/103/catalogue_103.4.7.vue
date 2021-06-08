<template>
   <div>
      <label for='input-one'>
        Detailed description of the cab of the vehicle type including its dimensions, configuration and constituent materials and its attachment to any chassis frame:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10347: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.7"
  }
</script>
