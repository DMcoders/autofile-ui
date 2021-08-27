<template>
  <div>
    <label for='input-one'>
      In the case of lateral protection device(s), full description and/or drawing of such device(s) (including mountings and fittings) or its/their component type-approval number(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {itcolpd: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.19.2"
  }
</script>
