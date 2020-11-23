<template>
  <div>
    <label for='input-one'>
      Pure electric: yes/no 9/：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pureelectric: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.3.1.1"
  }
</script>
