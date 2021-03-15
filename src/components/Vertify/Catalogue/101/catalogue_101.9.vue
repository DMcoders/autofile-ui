<template>
  <div>
    <div>
      <label for='input-one'>
        Manufacturer's engine code as marked on the engine：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {mecamote101_9: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.9",
    props: ['value']
  }
</script>
