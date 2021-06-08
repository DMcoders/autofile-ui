<template>
  <div>
    <label for='input-one'>
      Type：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type32521: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.5.2.1"
  }
</script>
