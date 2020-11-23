<template>
  <div>
    <label for='input-one'>
      Make(s)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {make3261: $event.target.value})">
      See annex C page 6
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.6.1"
  }
</script>
