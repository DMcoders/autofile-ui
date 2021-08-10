<template>
  <div>
    <div>
      <label for='input-one'>
        Maximum V-value (kN): 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_2_11_4_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.4.2"
  }
</script>
