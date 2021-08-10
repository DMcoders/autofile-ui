<template>
  <div>
    <label for='input-one'>
      Intake silencer, drawings：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {isd: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.2.3.2"
  }
</script>
