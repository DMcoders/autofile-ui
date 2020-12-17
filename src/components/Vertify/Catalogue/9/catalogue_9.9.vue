<template>
  <div>
    <label for='input-one'>
      Rear-view mirrors (state for each mirror):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {rvm: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.9"
  }
</script>
