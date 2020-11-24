<template>
  <div>
    <label for='input-one'>
      Overall transmission ratio (pursuant to item : 2.2.2 of ECE-R39) or equivalent data：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {otr: $event.target.value})">
      4.2
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.4"
  }
</script>
