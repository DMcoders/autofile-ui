<template>
  <div>
    <label for='input-one'>
      Characteristics for seats not type-approved as components, description and drawings of:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91034: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.4"
  }
</script>
