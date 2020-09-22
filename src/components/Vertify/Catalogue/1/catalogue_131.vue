<template>
  <div>
    <div>
      <label for='input-one'>
        Number and position of axles with twin wheels：
        <input id='input-one'
               v-bind:value='value.napoawtw'
               v-on:input="$emit('input', {napoawtw: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_131",
    props: ['value']
  }
</script>
