<template>
  <div>
    <label for='input-one'>
      Ground clearance (as defined in points 3.1.1 and 3.2.1 of Appendix 1 to Annex II to Directive 2007/46/EC)
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {gclearance2426: $event.target.value})">
    </label>
  </div>
</template>


<script>
  export default {
    name: "catalogue_2.4.2.6"
  }
</script>
