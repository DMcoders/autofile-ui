<template>
  <div>
    <label for='input-one'>
      Number and position of safety belt anchorages and proof of compliance with UN Regulation No 14 (87), (i.e. number of the type-approval certificate or test report):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type9123: $event.target.value})">

    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.12.3"
  }
</script>
