<template>
  <div>
    <div>
      <label for='input-one'>
        Nominal charging voltage:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {mnc101_68: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.68",
    props: ['value']
  }
</script>
