<template>
  <div>
    <div>
      <label for='input-one'>
        Rear-view c (state for each mirror)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {rvc101_51: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.51",
    props: ['value']
  }
</script>
