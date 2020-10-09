<template>
  <div>
    <div>
      <label for='input-one'>
        Name(s) and address(es) of assembly plant(s)：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {naaoap: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_0.8",
    props: ['value']
  }
</script>
