<template>
  <div>
      <label for='input-one'>
        Technically permissible maximum laden mass stated by the manufacturer (maximum and minimum mass for each version):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_107_2_3: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_107.2.3"
  }
</script>
