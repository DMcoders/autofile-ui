<template>
  <div>
    <label for='input-one'>
      Center-axle trailer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {cat: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.3"
  }
</script>
