<template>
  <div>
    <label for='input-one'>
      Drawing or photographs of the position of metal components housed in the engine compartment (e.g. Heating appliances, spare wheel, air filter, steering mechanism, etc.):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dopotpomchitec: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.18.2"
  }
</script>
