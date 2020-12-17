<template>
  <div>
    <label for='input-one'>
      Vehicle is equipped to tow a trailer with electric /pneumatic / hydraulic service brakes: yes/no:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {catotbs: $event.target.value})">
      Yes/No
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.4"
  }
</script>
