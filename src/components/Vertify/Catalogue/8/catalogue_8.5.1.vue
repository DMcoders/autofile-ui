<template>
  <div>
    <label for='input-one'>
      For vehicle with anti-lock systems, description of system operation (including any electronic parts), electric block diagram, hydraulic or pneumatic circuit plan:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {doso: $event.target.value})">
      See annex C
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.5.1"
  }
</script>
