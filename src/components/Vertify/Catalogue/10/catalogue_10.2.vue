<template>
  <div>
    <label for='input-one'>
      Drawing of the position of lighting and light signaling devices：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotpolalsd: $event.target.value})">
    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.2"
  }
</script>
