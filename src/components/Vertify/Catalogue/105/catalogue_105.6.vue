<template>
  <div>
    <div>
      <label for='input-one'>
        Name and address of manufacturer:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_6: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.6"
  }
</script>
