<template>
  <div>
      <label for='input-one'>
        Information on the fitting of special towing brackets or mounting plates:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_11_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_11.4"
  }
</script>
