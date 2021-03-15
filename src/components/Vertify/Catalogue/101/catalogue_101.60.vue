<template>
  <div>
    <div>
      <label for='input-one'>
        A brief description of electrical/electronic components other than lamps (if any):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ab101_60: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.60",
    props: ['value']
  }
</script>
