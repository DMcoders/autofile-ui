<template>
  <div>
    <label for='input-one'>
      Nature and position of supplementary restraint systems (indicate yes/no/optional):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9122: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.12.2"
  }
</script>
