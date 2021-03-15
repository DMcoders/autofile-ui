<template>
  <div>
    <div>
      <label for='input-one'>
        Fuel feed：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ff101_13: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.13",
    props: ['value']
  }
</script>
