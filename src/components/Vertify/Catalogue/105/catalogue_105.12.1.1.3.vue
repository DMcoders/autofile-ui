<template>
  <div>
    <div>
      <label for='input-one'>
        Optional equipment which may affect the rearward field of vision:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_1_3: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.1.3"
  }
</script>
