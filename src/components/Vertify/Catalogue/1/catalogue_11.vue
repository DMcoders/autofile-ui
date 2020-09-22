<template>
  <div>
    <div>
      <label for='input-one'>
        Photographs and/or drawings of a representative vehicle：
        <input id='input-one'
               v-bind:value='value.padoarv'
               v-on:input="$emit('input', {padoarv: $event.target.value})">
      </label>
      See annex B
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_11",
    props: ['value']
  }
</script>
