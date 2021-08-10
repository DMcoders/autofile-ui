<template>
  <div>
      <label for='input-one'>
        Nominal voltage (V):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_4_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.4.3"
  }
</script>
