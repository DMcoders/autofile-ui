<template>
  <div>
    <div>
      <label for='input-one'>
        Electric motor：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {em101_35: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.35",
    props: ['value']
  }
</script>
