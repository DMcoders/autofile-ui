<template>
  <div>
    <label for='input-one'>
      Type：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type53: $event.target.value})">
      Front:3000000LE17F
      Rear: 2400010LE058
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_5.3"
  }
</script>
