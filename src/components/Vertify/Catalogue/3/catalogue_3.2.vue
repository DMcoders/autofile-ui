<template>
  <div>
    <label for='input-one'>
      Internal combustion engine：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ice: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2"
  }
</script>
