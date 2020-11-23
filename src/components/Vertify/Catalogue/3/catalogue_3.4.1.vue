<template>
  <div>
    <label for='input-one'>
      Hybrid electric vehicle: yes/no 9/：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {hev: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.1"
  }
</script>
