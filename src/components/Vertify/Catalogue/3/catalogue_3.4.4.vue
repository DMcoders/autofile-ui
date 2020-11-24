<template>
  <div>
    <label for='input-one'>
      Electric motor (describe each type of electric motor separately)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {emotor: $event.target.value})">
      Not applicable
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4.4"
  }
</script>
