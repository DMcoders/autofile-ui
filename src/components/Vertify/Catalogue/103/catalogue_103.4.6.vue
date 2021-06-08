<template>
   <div>
      <label for='input-one'>
        R-points:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10346: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.6"
  }
</script>
