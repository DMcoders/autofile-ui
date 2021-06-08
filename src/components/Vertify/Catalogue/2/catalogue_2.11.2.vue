<template>
  <div>
    <label for='input-one'>
      Semi-trailer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type2112: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.2"
  }
</script>
