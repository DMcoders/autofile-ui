<template>
  <div>
    <label for='input-one'>
      Lateral protection:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {lateralprotection: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.19"
  }
</script>
