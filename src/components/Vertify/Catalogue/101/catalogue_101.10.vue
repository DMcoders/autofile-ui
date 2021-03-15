<template>
  <div>
    <div>
      <label for='input-one'>
        Internal combustion engine：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ice101_10: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.10",
    props: ['value']
  }
</script>
