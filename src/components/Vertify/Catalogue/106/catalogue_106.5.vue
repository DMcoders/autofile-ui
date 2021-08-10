<template>
  <div>
      <label for='input-one'>
        Moment of inertia of engine flywheel and of transmission with no gear engaged:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.5"
  }
</script>
