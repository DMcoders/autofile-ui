<template>
  <div>
    <div>
      <label for='input-one'>
        Particulars of the nominal value of the direct current resistances, and, in the case of resistive ignition cables, of their nominal resistance per metre:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {po101_59: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.59",
    props: ['value']
  }
</script>
