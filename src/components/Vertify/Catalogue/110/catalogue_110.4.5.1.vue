<template>
  <div>
      <label for='input-one'>
        Type : Manual/Automatic/CVT(continuously variable transmission)/Fixedratio/Automised/Other/Wheel hub:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_110_4_5_1: $event.target.value})">
      </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_110.4.5.1"
  }
</script>
