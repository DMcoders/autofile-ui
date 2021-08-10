<template>
  <div>
    <label for='input-one'>
      Registration/in service maximum permissible mass of the combination:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_16_5: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.16.5"
  }
</script>
