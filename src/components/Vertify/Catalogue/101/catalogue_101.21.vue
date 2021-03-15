<template>
  <div>
    <div>
      <label for='input-one'>
        Generator：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {generator101_21: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.21",
    props: ['value']
  }
</script>
