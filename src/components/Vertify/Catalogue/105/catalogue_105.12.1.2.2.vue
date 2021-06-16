<template>
  <div>
    <div>
      <label for='input-one'>
        In the case of camera-monitor system of Classes I to IV:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2"
  }
</script>
