<template>
   <div>
      <label for='input-one'>
        Category of vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10314: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.4"
  }
</script>
