<template>
  <div>
    <div>
      <label for='input-one'>
        Operating voltage
        Gas fuelled engines (in the case of systems laid-out in a different manner, supply equivalent information) ：
        <input id='input-one'
               v-bind:value='value'
               v-on:input="$emit('input', {ov01_37: $event.target.value})">
      </label>
    </div>
  </div>
</template>


<script>
  export default {
    name: "catalogue_101.37",
    props: ['value']
  }
</script>
