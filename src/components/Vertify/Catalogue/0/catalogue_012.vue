<template>
  <div>
    <div>
      <label for='input-one'>
        Rated voltage(s), V: 3/:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {rv: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_012",
    props: ['value']
  }
</script>
