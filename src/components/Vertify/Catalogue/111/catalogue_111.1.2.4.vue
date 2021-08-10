<template>
  <div>
      <label for='input-one'>
        Commercial description(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_111_1_2_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_111.1.2.4"
  }
</script>
