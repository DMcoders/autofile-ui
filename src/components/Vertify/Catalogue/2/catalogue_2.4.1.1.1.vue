<template>
  <div>
    <label for='input-one'>
      Maximum permissible length：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {maxpl: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.1.1"
  }
</script>
