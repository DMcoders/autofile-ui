<template>
  <div>
    <label for='input-one'>
      For bodywork approved without chassis (vehicles M2 and M3)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {fbawc: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.3"
  }
</script>
