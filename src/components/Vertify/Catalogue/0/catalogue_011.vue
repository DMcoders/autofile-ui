<template>
  <div>
    <div>
      <label for='input-one'>
        The approval number and issuing authority of audible warning device(s), audible warning system(s), multiple audible warning system(s):
        <input id='input-one'
               v-bind:value='value.tanaiaoawd'
               v-on:input="$emit('input', {tanaiaoawd: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_011",
    props: ['value']
  }
</script>
