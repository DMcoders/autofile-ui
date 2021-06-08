<template>
   <div>
      <label for='input-one'>
        Address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10316: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.1.6"
  }
</script>
