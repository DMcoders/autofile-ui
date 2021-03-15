<template>
  <div>
    <div>
      <label for='input-one'>
        Type：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type101_22: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.22",
    props: ['value']
  }
</script>
