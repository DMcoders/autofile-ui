<template>
   <div>
      <label for='input-one'>
        Type of cab: (normal/sleeper/top-sleeper):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10341: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.1"
  }
</script>
