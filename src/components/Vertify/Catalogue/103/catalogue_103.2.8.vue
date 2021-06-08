<template>
   <div>
      <label for='input-one'>
        Hand of drive: left/right:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10328: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.8"
  }
</script>
