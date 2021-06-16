<template>
  <div>
    <div>
      <label for='input-one'>
        Address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_7: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.7"
  }
</script>
