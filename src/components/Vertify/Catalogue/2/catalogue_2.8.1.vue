<template>
  <div>
    <label for='input-one'>
      Distribution of this mass among the axles and, in the case of a semi-trailer or centre-axle trailer, load on the coupling point：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dotmataa: $event.target.value})">
      See annex C
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.8.1"
  }
</script>
