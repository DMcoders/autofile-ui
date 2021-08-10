<template>
  <div>
    <label for='input-one'>
      Detailed technical description (including photographs or drawings) or, if approved as separate technical unit, type-approval number:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_7_1: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.7.1"
  }
</script>
