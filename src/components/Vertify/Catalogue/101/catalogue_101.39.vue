<template>
  <div>
    <div>
      <label for='input-one'>
        Make(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {make101_39: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.39",
    props: ['value']
  }
</script>
