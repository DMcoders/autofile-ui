<template>
  <div>
    <div>
      <label for='input-one'>
        Charging cable delivered with the vehicle: yes/no 1/ :
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {c101_71: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.71",
    props: ['value']
  }
</script>
