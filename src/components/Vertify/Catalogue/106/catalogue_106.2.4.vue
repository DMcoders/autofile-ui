<template>
  <div>
      <label for='input-one'>
        Mufflers, make and type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_2_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.2.4"
  }
</script>
