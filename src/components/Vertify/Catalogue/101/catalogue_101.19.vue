<template>
  <div>
    <div>
      <label for='input-one'>
        Electrical system：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {es101_19: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.19",
    props: ['value']
  }
</script>
