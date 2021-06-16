<template>
  <div>
    <label for='input-one'>
      Marks assigned for loading conditions:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {referencemarks1055: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.6"
  }
</script>
