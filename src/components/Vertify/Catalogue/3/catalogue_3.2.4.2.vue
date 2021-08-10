<template>
  <div>
    <label for='input-one'>
      Exhaust silencer(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {exhaustsilencer: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4.2"
  }
</script>
