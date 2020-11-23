<template>
  <div>
    <label for='input-one'>
      Maximum vehicle speed (and gear in which this is achieved) (in km/h)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mvs4789: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.7(R89)"
  }
</script>
