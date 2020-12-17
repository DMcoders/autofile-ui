<template>
  <div>
    <label for='input-one'>
      Presence: yes/no/incomplete:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pyni: $event.target.value})">

    </label>
    yes
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.20.0"
  }
</script>
