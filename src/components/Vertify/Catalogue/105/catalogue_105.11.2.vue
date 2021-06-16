<template>
  <div>
    <div>
      <label for='input-one'>
        For chassis with bodywork:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_11_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.11.2"
  }
</script>
