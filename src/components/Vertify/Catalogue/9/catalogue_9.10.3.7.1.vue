<template>
  <div>
    <label for='input-one'>
      Driver's seat:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type910371: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.7.1"
  }
</script>
