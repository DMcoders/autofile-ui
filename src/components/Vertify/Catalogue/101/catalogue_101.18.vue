<template>
  <div>
    <div>
      <label for='input-one'>
        By fuel injection (positive ignition only)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {bfi101_18: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.18",
    props: ['value']
  }
</script>
