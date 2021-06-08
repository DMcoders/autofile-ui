<template>
   <div>
      <label for='input-one'>
        Drawings of door latches and retention components and their position in the doors:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10344: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.4"
  }
</script>
