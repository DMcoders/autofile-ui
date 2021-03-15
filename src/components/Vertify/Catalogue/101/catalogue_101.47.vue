<template>
  <div>
    <div>
      <label for='input-one'>
        Type of bodywork：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {tob101_47: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.47",
    props: ['value']
  }
</script>
