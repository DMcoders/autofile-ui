<template>
   <div>
      <label for='input-one'>
        Drawings of the cab and those parts of its interior arrangement which have an influence on the residual space:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10348: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.8"
  }
</script>
