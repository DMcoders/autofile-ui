<template>
  <div>
    <label for='input-one'>
      Design torso angle of:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91036: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.6"
  }
</script>
