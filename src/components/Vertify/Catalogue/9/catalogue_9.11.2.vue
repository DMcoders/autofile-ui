<template>
  <div>
    <label for='input-one'>
      Drawings and/or photographs, for example, and
      where relevant, of the door and window pillars,
      air-intake grilles, radiator grille, windscreen
      wipers, rain gutter channels, handles, slide rails,
      flaps, door hinges and locks, hooks, eyes,
      decorative trim, badges, emblems and recesses
      and any other external projections and parts of
      the exterior surface which can be regarded as
      critical (e.g. lighting equipment). If the parts listed in the previous sentence are not critical, for documentation purposes they may be replace by photographs, accompanied if necessary by dimensional details and/or text :
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {dap: $event.target.value})">
    </label>
    See annex G
  </div>
</template>

<script>
  export default {
    name: "catalogue_9.11.2"
  }
</script>
