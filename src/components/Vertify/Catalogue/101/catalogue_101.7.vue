<template>
  <div>
    <div>
      <label for='input-one'>
        Position and arrangement of the engine：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {paaote101_7: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.7",
    props: ['value']
  }
</script>
