<template>
  <div>
    <label for='input-one'>
      Position of lift axle(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {pola54: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.4"
  }
</script>
