<template>
  <div>
    <label for='input-one'>
      Under the rear axle(s)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {utra24163: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.6.3"
  }
</script>
