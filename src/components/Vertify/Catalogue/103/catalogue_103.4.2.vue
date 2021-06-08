<template>
   <div>
      <label for='input-one'>
        Materials used and methods of construction:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type10342: $event.target.value})">
      </label>
    </div>
</template>

<script>
  export default {
    name: "catalogue_103.4.2"
  }
</script>
