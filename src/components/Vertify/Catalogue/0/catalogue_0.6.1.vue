<template>
  <div>
    <div>
      <label for='input-one'>
        On the chassis：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {oct: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.6.1",
    props: ['value']
  }
</script>
