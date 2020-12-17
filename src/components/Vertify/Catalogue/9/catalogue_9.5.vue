<template>
  <div>
    <label for='input-one'>
      Windscreen and other windows:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {waow: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5"
  }
</script>
