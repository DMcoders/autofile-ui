<template>
  <div>
      <label for='input-one'>
        Technically permissible maximum mass of the combination:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_108_2_10_4: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_108.2.10.4"
  }
</script>
