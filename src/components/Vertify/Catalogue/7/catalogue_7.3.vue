<template>
  <div>
    <label for='input-one'>
      Maximum steering angle of the wheels：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {msaotw: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_7.3"
  }
</script>
