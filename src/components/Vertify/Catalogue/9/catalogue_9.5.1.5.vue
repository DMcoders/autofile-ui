<template>
  <div>
    <label for='input-one'>
      Windscreen accessories and the position in which they are fitted together with a brief description of any electrical/electronic components involved:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {waatp: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1.5"
  }
</script>
