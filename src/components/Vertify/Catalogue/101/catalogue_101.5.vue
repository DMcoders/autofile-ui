<template>
  <div>
      <label for='input-one'>
        Name(s) and address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaoap101_5: $event.target.value})">
      </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.5",
    props: ['value']
  }
</script>
