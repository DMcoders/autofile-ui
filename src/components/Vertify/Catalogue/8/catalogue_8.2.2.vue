<template>
  <div>
    <label for='input-one'>
      Secondary braking system:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {sbs: $event.target.value})">
      Circuit I or circuit II of service braking system (See item no. 8.2.1.)
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.2.2"
  }
</script>
