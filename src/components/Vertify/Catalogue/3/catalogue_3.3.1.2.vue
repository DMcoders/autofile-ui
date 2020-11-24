<template>
  <div>
    <label for='input-one'>
      Operating voltage: …. V：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ovv: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3.1.2"
  }
</script>
