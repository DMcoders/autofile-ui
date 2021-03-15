<template>
  <div>
    <div>
      <label for='input-one'>
        Description and drawings/photographs of the shapes and constituent materials of the part of the body forming the engine compartment and the part of the passenger compartment nearest to it：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {da101_56: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.56",
    props: ['value']
  }
</script>
