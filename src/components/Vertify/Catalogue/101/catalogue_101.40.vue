<template>
  <div>
    <div>
      <label for='input-one'>
        Type(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type101_40: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.40",
    props: ['value']
  }
</script>
