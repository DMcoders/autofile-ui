<template>
  <div>
    <div>
      <label for='input-one'>
        Make(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {make101_24: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.24",
    props: ['value']
  }
</script>
