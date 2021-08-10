<template>
  <div>
      <label for='input-one'>
        Capacity (Ah):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_3_4_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.3.4.3"
  }
</script>
