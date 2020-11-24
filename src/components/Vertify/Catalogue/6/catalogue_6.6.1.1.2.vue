<template>
  <div>
    <label for='input-one'>
      Axle 2:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {axle2: $event.target.value})">
      See the table above
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_6.6.1.1.2"
  }
</script>
