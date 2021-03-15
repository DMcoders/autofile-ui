<template>
  <div>
    <div>
      <label for='input-one'>
        Working principle：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {wp101_26: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.26",
    props: ['value']
  }
</script>
