<template>
  <div>
    <label for='input-one'>
      In the case of trailers, maximum permissible drawbar length：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {mpdl: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.1.1.3"
  }
</script>
