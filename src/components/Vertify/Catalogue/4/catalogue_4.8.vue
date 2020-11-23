<template>
  <div>
    <label for='input-one'>
      Speedometer (in the case of tachograph give approval mark only)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {speedometer: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8"
  }
</script>
