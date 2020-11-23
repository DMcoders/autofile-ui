<template>
  <div>
    <label for='input-one'>
      Hybrid modes: yes/no 9/ (if yes, short description)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {hybridmodes: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3.1.3"
  }
</script>
