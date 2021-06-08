<template>
  <div>
    <label for='input-one'>
      Range of seat adjustment of:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91037: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.7"
  }
</script>
