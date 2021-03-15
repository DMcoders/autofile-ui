<template>
  <div>
    <div>
      <label for='input-one'>
        Table of installation and use of RF transmitters in the vehicle(s), if applicable (see paragraph 3.1.8. of this Regulation):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {to101_63: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.63",
    props: ['value']
  }
</script>
