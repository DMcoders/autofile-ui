<template>
  <div>
    <label for='input-one'>
      A detailed technical description of the vehicle immobilizar and of the measures taken against inadvertent activation:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type1221521: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_12.2.1.5.2.1"
  }
</script>
