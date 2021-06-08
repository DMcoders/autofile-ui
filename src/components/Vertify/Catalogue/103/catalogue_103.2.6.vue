<template>
   <div>
      <label for='input-one'>
        Position and arrangement of the engine:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10326: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.2.6"
  }
</script>
