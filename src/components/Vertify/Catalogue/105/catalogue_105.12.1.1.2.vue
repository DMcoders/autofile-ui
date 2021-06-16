<template>
  <div>
    <div>
      <label for='input-one'>
        Details of the method of attachment including that part of the vehicle structure to which it is attached:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_1_2: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.1.2"
  }
</script>
