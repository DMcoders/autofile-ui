<template>
  <div>
    <label for='input-one'>
      Method of assistance (if any)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {moa: $event.target.value})">
      HPS
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.2.3"
  }
</script>
