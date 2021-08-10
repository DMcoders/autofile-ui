<template>
  <div>
    <div>
      <label for='input-one'>
        Number and position of steered wheels:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_114_1_3_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_114.1.3.2"
  }
</script>
