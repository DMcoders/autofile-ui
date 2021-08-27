<template>
  <div>
    <label for='input-one'>
      Rear under-run protection:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_15: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.15"
  }
</script>
