<template>
  <div>
      <label for='input-one'>
        Maximum vehicle design speed (in km/h):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_4_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.4.3"
  }
</script>
