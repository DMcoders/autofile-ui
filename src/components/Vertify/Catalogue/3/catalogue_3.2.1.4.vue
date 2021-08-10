<template>
  <div>
      <label for='input-one'>
        Rated maximum net power:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_3_2_1_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_3.2.1.4"
  }
</script>
