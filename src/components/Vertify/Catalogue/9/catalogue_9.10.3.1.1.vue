<template>
  <div>
    <label for='input-one'>
      Location and arrangement:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {locationandarrangement: $event.target.value})">

    </label>
    See annex C
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.3.1.1"
  }
</script>
