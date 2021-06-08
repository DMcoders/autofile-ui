<template>
   <div>
      <label for='input-one'>
        Dimensional drawing of the whole vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10322: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.2"
  }
</script>
