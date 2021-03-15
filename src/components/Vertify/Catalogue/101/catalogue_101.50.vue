<template>
  <div>
    <div>
      <label for='input-one'>
        A brief description of the electrical/electronic components (if any) of the window lifting mechanism：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ab101_50: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.50",
    props: ['value']
  }
</script>
