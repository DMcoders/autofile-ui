<template>
  <div>
    <label for='input-one'>
      Semi-trailer special wheelbase (as defined in point 3.2 of Part D of Annex I to Commission Regulation (EU) No 1230/2012:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_2_2_1_3: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.2.1.3"
  }
</script>
