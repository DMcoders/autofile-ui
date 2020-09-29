<template>
  <div>
    <div>
      <label for='input-one'>
        Chassis (if any) (overall drawing)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ciaod: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_14",
    props: ['value']
  }
</script>
