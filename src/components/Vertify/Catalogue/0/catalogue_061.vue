<template>
  <div>
    <div>
      <label for='input-one'>
        On the chassis：
        <input id='input-one'
               v-bind:value='value.oct'
               v-on:input="$emit('input', {oct: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_061",
    props: ['value']
  }
</script>
