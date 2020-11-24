<template>
  <div>
    <label for='input-one'>
      Maximum mass of unbraked trailer：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mmout: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.11.6"
  }
</script>
