<template>
  <div>
    <div>
      <label for='input-one'>
        Type of electrical supply (direct or alternating current):
        <input id='input-one'
               v-bind:value='value.toes'
               v-on:input="$emit('input', {toes: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_013",
    props: ['value']
  }
</script>
