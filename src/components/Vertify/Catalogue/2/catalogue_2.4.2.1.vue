<template>
  <div>
    <label for='input-one'>
      Length：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {lengthg2421: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.1"
  }
</script>
