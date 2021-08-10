<template>
  <div>
      <label for='input-one'>
        Intake system depression at rated engine speed and at 100% load:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_1_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.1.4"
  }
</script>
