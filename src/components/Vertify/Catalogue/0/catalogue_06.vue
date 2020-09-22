<template>
  <div>
    <div>
      <label for='input-one'>
        Location and method of attachment of statutory plates and location of vehicle identification number：
        <input id='input-one'
               v-bind:value='value.lamoaospaalovin'
               v-on:input="$emit('input', {lamoaospaalovin: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_06",
    props: ['value']
  }
</script>
