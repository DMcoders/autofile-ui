<template>
  <div>
    <label for='input-one'>
      Maximum exhaust temperature at the point in the exhaust pipe(s) adjacent to the outer flange(s) of the exhaust manifold or turbocharger:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_113_3_6_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_113.3.6.3"
  }
</script>
