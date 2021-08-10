<template>
  <div>
    <label for='input-one'>
      Type(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type32312: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.1.2"
  }
</script>
