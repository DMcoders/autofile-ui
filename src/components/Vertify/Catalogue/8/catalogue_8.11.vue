<template>
  <div>
    <label for='input-one'>
      Particulars of the type(s) of endurance braking system(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pottoebs: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.11"
  }
</script>
