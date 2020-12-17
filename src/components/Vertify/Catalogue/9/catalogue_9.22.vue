<template>
  <div>
    <label for='input-one'>
      Front under-run protection:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {furp: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.22"
  }
</script>
