<template>
  <div>
    <label for='input-one'>
      Minimum permissible length：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {minpl: $event.target.value})">
      See annex B
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.1.2"
  }
</script>
