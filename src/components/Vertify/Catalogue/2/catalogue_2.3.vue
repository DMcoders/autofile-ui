<template>
  <div>
    <label for='input-one'>
      Axle track(s) and width(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {ataw: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.3"
  }
</script>
