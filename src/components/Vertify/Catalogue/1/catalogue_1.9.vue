<template>
  <div>
    <div>
      <label for='input-one'>
        Specify if the towing vehicle is intended to tow semi-trailers or other trailers and, if the trailer is a semi-, drawbar-, centre-axle- or rigid drawbar trailer：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {sittviittsoota: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_1.9",
    props: ['value']
  }
</script>
