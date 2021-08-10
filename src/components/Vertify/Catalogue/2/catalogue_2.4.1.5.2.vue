<template>
  <div>
    <label for='input-one'>
      Minimum and maximum permissible overhang of the coupling point:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mampootcp24152: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.5.2"
  }
</script>
