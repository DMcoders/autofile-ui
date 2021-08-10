<template>
  <div>
    <label for='input-one'>
      Interior arrangement:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {interiorfittings: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10"
  }
</script>
