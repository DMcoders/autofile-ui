<template>
  <div>
    <div>
      <label for='input-one'>
        Charger: on board/ external/ without:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {c101_65: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.65",
    props: ['value']
  }
</script>
