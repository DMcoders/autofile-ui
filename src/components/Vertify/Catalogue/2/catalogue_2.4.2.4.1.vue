<template>
  <div>
    <label for='input-one'>
      Approach angle
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {aangle24241: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.4.1"
  }
</script>
