<template>
  <div>
    <label for='input-one'>
      Under the front axle(s)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {utfa24162: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.6.2"
  }
</script>
