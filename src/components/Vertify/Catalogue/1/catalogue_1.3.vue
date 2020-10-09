<template>
  <div>
    <div>
      <label for='input-one'>
        Number of axles and wheels：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {noaaw: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.3",
    props: ['value']
  }
</script>
