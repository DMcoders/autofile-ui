<template>
   <div>
      <label for='input-one'>
        Version:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type103123: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.2.3"
  }
</script>
