<template>
  <div>
    <div>
      <label for='input-one'>
        Hand of drive：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {hod: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.8",
    props: ['value']
  }
</script>
