<template>
  <div>
    <label for='input-one'>
      Registration/in service maximum permissible mass on each axle and, in the case of a semi-trailer or centre- axle trailer, intended load on the coupling point stated by the manufacturer if lower than the technically permissible maximum mass on the coupling point:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_16_2: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.16.2"
  }
</script>
