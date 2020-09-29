<template>
  <div>
    <div>
      <label for='input-one'>
        Rated operating pressure(s), MPa (kg/cm 2 ):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {rop: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_014",
    props: ['value']
  }
</script>
