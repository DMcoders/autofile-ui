<template>
  <div>
    <div>
      <label for='input-one'>
        Number and arrangement of cylinders：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaoc101_12: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.12",
    props: ['value']
  }
</script>
