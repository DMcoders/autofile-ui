<template>
  <div>
    <label for='input-one'>
      For head restraints not yet approved:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type91043: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.4.3"
  }
</script>
