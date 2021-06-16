<template>
  <div>
    <label for='input-one'>
      Reference marks:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {referencemarks1045: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_10.4.5"
  }
</script>
