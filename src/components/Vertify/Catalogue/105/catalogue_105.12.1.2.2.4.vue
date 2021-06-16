<template>
  <div>
    <div>
      <label for='input-one'>
        Drawing(s)/photograph(s) showing the setup and monitor image of the required field of view:
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_4: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.4"
  }
</script>
