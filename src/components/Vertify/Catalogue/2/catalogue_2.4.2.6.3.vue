<template>
  <div>
    <label for='input-one'>
      Under the rear axle(s)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {utra24263: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.6.3"
  }
</script>
