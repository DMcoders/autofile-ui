<template>
  <div>
      <label for='input-one'>
        Particulate trap, make and type:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_106_2_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_106.2.3"
  }
</script>
