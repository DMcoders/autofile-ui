<template>
  <div>
    <label for='input-one'>
      Approval number(s):
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {approvalnumber: $event.target.value})">

    </label>
    II E4 43R-011187
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.5.1.4"
  }
</script>
