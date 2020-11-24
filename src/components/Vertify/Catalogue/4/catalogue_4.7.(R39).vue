<template>
  <div>
    <label for='input-one'>
      Maximum vehicle speed (in km/h) (and gear in which this is achieved) ：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mvs4739: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.7.(R39)"
  }
</script>
