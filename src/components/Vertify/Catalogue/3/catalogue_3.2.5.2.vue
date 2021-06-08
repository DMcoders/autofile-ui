<template>
  <div>
    <label for='input-one'>
      Generator：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type3252: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.5.2"
  }
</script>
