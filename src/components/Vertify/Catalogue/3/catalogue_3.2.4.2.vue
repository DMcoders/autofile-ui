<template>
  <div>
    <label for='input-one'>
      Exhaust silencer(s): for front, centre, rear silencer construction, type, marking; where relevant for exterior noise: noise reducing measures in the engine compartment and on the engine：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {exhaustsilencer: $event.target.value})">
      See annex C page 3
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.4.2"
  }
</script>
