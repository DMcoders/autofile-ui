<template>
   <div>
      <label for='input-one'>
        Number of axles and wheels:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10323: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.3"
  }
</script>
