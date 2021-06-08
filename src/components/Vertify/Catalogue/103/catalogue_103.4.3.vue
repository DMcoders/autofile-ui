<template>
   <div>
      <label for='input-one'>
        Door configuration and number of doors:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10343: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.3"
  }
</script>
