<template>
  <div>
    <div>
      <label for='input-one'>
        Material used for the side-members：
        <input id='input-one'
               v-bind:value='value.mufts'
               v-on:input="$emit('input', {mufts: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_15",
    props: ['value']
  }
</script>
