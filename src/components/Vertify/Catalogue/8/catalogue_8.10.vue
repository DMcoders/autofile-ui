<template>
  <div>
    <label for='input-one'>
      If claiming exemptions from the type I and/or type II tests, state the number of the report in accordance with appendix 2 of annex VII to directive 71/320/EEC:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {stnotriaw: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_8.10"
  }
</script>
