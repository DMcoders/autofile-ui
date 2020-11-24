<template>
  <div>
    <label for='input-one'>
      Maximum permissible width：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {maxpw: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.2.1"
  }
</script>
