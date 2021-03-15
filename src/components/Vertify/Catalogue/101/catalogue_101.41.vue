<template>
  <div>
    <div>
      <label for='input-one'>
        Type (mechanical, hydraulic, electric, etc)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type101_41: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.41",
    props: ['value']
  }
</script>
