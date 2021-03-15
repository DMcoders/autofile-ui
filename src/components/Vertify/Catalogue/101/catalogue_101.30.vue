<template>
  <div>
    <div>
      <label for='input-one'>
        Type(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type101_30: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.30",
    props: ['value']
  }
</script>
