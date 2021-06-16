<template>
  <div>
    <label for='input-one'>
      Maximum vehicle design speed (in km/h) (and gear in which this is achieved) ：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mvds: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.3"
  }
</script>
