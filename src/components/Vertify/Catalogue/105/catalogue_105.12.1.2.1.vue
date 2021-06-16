<template>
  <div>
    <div>
      <label for='input-one'>
        Sufficiently detailed drawings with the installation instructions:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_1: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.1"
  }
</script>
