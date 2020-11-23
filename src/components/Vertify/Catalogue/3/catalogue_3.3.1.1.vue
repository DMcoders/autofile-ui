<template>
  <div>
    <label for='input-one'>
      Maximum hourly output: …. kW：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mho: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1.1"
  }
</script>
