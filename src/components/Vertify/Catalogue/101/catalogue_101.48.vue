<template>
  <div>
    <div>
      <label for='input-one'>
        Materials used and methods of construction：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {muamoc101_48: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.48",
    props: ['value']
  }
</script>
