<template>
  <div>
    <label for='input-one'>
      Charger (on board/external/without):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_4_4_6: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.4.6"
  }
</script>
