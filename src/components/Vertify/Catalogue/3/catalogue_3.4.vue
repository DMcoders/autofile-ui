<template>
  <div>
    <label for='input-one'>
      Other engines or motors or combinations thereof (particulars regarding the parts of such engines or motors)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_3_4: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_3.4"
  }
</script>
