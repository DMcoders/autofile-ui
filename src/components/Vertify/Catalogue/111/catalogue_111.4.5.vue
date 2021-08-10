<template>
  <div>
      <label for='input-one'>
        Type of cooling system (if any):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_5: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.5"
  }
</script>
