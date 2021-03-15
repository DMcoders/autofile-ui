<template>
  <div>
    <div>
      <label for='input-one'>
        A brief description of the electrical/electronic components (if any)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ab101_54: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.54",
    props: ['value']
  }
</script>
