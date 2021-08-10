<template>
  <div>
      <label for='input-one'>
        In the case of tractive units:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_2: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.2"
  }
</script>
