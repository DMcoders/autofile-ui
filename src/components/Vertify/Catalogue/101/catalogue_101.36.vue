<template>
  <div>
    <div>
      <label for='input-one'>
        Type (winding, excitation)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type101_36: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.36",
    props: ['value']
  }
</script>
