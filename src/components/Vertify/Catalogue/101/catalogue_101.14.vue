<template>
  <div>
    <div>
      <label for='input-one'>
        By fuel injection (compression ignition only)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {bfi101_14: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.14",
    props: ['value']
  }
</script>
