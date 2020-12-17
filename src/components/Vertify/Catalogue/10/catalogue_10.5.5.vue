<template>
  <div>
    <label for='input-one'>
      Reference marks:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {referencemarks1055: $event.target.value})">
    </label>
    Not applicable
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.5.5"
  }
</script>
