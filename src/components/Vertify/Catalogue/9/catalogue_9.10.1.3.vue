<template>
  <div>
    <label for='input-one'>
      Photographs, drawings and/or an exploded view of the interior fittings, showing the parts in the passenger compartment and the materials used (with the exception of interior rear view mirrors), arrangement of controls, roof and opening roof, backrest, seats and the rear part of seats:
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {type_9_10_1_3: $event.target.value})">
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.10.1.3"
  }
</script>
