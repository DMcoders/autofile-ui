<template>
  <div>
    <div>
      <label for='input-one'>
        Position and arrangement of the engine:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_1_6: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.6"
  }
</script>
