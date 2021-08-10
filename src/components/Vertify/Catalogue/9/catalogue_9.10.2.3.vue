<template>
  <div>
    <label for='input-one'>
      Summary table:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {summarytable: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.2.3"
  }
</script>
