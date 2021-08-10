<template>
  <div>
    <label for='input-one'>
      Details, including dimensions, of entrances, steps and necessary handles where applicable:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_3_4: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.3.4"
  }
</script>
