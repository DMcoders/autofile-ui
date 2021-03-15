<template>
  <div>
    <div>
      <label for='input-one'>
        Description of the system：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {dots101_17: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.17",
    props: ['value']
  }
</script>
