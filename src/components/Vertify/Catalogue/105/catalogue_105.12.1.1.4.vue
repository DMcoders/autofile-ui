<template>
  <div>
    <div>
      <label for='input-one'>
        A brief description of the electronic components (if any) of the adjustment device:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_1_4: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.1.4"
  }
</script>
