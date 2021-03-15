<template>
  <div>
    <div>
      <label for='input-one'>
        Drawings or photographs of the position of metal
        components housed in the engine compartment
        (e.g. Heating appliances, spare wheel, air filter,
        steering mechanism, etc.):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {do101_57: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.57",
    props: ['value']
  }
</script>
