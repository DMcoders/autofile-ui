<template>
  <div>
    <label for='input-one'>
      Mass in Running Order (a) minimum and maximum for each variant：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {miro: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.6"
  }
</script>
