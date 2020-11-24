<template>
  <div>
    <label for='input-one'>
      Tolerance of the measuring mechanism (pursuant to item 2.2.3 of ECE-R39)：
      <input id='input-one'
             v-bind:value='value'
             v-on:input="$emit('input', {totmm: $event.target.value})">
      <table width="400" border="1px solid #ccc" cellspacing="0" cellpadding="0" style="margin:auto">
        <thead>
        <tr>
          <td rowspan="2">Speedometer reading (km/h)
          </td>
          <td rowspan="1" colspan="2">True speed (km/h)
          </td>
        </tr>
        <tr>
          <td rowspan="1"> V min</td>
          <td rowspan="1"> V max</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>40</td>
          <td>35</td>
          <td>40</td>
        </tr>
        <tr>
          <td>70</td>
          <td>65</td>
          <td>70</td>
        </tr>
        <tr>
          <td>90</td>
          <td>85</td>
          <td>90</td>
        </tr>
        </tbody>
      </table>
    </label>
  </div>
</template>

<script>
  export default {
    name: "catalogue_4.8.3"
  }
</script>
