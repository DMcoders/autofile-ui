<template>
  <div>
    <div>
      <label for='input-one'>
        Bodywork/complete vehicle:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_0_3_0_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.3.0.2"
  }
</script>
