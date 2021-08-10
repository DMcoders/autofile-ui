<template>
  <div>
    <label for='input-one'>
      Spray-suppression system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sss: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20"
  }
</script>
