<template>
  <div>
    <div>
      <label for='input-one'>
        On the body work：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {otbw: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.6.2",
    props: ['value']
  }
</script>
