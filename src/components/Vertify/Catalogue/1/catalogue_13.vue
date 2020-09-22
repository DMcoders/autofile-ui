<template>
  <div>
    <div>
      <label for='input-one'>
        Number of axles and wheels：
        <input id='input-one'
               v-bind:value='value.noaaw'
               v-on:input="$emit('input', {noaaw: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_13",
    props: ['value']
  }
</script>
