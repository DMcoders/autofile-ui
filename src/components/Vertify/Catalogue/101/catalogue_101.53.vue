<template>
  <div>
    <div>
      <label for='input-one'>
        Safety belts and/or other restraint systems：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {sbaors101_53: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.53",
    props: ['value']
  }
</script>
