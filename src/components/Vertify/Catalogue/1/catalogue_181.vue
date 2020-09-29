<template>
  <div>
    <div>
      <label for='input-one'>
        Vehicle is equipped to be driven in right hand/ left hand traffic：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {vietbdirhlht: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_181",
    props: ['value']
  }
</script>
