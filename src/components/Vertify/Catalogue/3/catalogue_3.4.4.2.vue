<template>
  <div>
    <label for='input-one'>
      Type：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type3442: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.4.2"
  }
</script>
