<template>
  <div>
    <label for='input-one'>
      Diagram of the speedometer scale or other forms of display：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotss: $event.target.value})">
      See annex C
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.5"
  }
</script>
