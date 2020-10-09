<template>
  <div>
    <div>
      <label for='input-one'>
        Photographs and/or drawings of a representative vehicle：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {padoarv: $event.target.value})">
      </label>
      See annex B
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.1",
    props: ['value']
  }
</script>
