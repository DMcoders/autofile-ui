<template>
  <div>
    <div>
      <label for='input-one'>
        Suppression of radio interference：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {sori101_55: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.55",
    props: ['value']
  }
</script>
