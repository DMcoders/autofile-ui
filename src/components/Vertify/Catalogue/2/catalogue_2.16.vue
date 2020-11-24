<template>
  <div>
    <label for='input-one'>
      Intended registration/in service maximum permissible masses (optional)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {irsmpm: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.16"
  }
</script>
