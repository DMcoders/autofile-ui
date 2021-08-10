<template>
  <div>
    <label for='input-one'>
      Attachment and mounting to the vehicle:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_27_3_3: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.27.3.3"
  }
</script>
