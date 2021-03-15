<template>
  <div>
    <div>
      <label for='input-one'>
        Photographs and/or drawings of a representative vehicle：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {pdoarv101_6: $event.target.value})">
      </label>
      See Annex B
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.6",
    props: ['value']
  }
</script>
