<template>
   <div>
      <label for='input-one'>
        Variant:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type103122: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.2.2"
  }
</script>
