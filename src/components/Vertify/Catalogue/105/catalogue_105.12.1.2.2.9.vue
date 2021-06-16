<template>
  <div>
    <div>
      <label for='input-one'>
        Documentation referred to in paragraph 16.1.1.1.1., if applicable:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_9: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.9"
  }
</script>
