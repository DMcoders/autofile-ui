<template>
  <div>
    <div>
      <label for='input-one'>
        Specify if the vehicles is specially designed for the controlled-temperature carriage of goods:：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {sitvisdftccog: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_19",
    props: ['value']
  }
</script>
