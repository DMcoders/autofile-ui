<template>
  <div>
    <label for='input-one'>
      Electric motor：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.3"
  }
</script>
