<template>
  <div>
    <label for='input-one'>
      Wheel base(s) (fully loaded)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {wbfl: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.1"
  }
</script>
