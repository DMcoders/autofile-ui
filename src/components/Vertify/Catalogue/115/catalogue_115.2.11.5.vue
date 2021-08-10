<template>
  <div>
    <div>
      <label for='input-one'>
        Technically permissible maximum laden mass of the combination: 
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_115_2_11_5: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_115.2.11.5"
  }
</script>
