<template>
  <div>
    <div>
      <label for='input-one'>
        Number and position of steered axles：
        <input id='input-one'
               v-bind:value='value.naposa'
               v-on:input="$emit('input', {naposa: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_132",
    props: ['value']
  }
</script>
