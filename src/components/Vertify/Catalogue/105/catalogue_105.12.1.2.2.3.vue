<template>
  <div>
    <div>
      <label for='input-one'>
        Drawing(s)/photograph(s) showing the drivers view onto the monitor(s):
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {type_105_12_1_2_2_3: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_105.12.1.2.2.3"
  }
</script>
