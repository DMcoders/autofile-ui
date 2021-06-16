<template>
  <div>
    <label for='input-one'>
      Gearbox：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {gearbox: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.5"
  }
</script>
