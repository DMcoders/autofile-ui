<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address(es) of assembly plant(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_0_7: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.7"
  }
</script>
