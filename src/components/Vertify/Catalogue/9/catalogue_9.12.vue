<template>
  <div>
    <label for='input-one'>
      Safety belts and/or other restraint system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sbaors: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.12"
  }
</script>
