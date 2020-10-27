<template>
  <table width="500" border="1">
    <thead>
    <tr>
      <th>V-V</th>
      <th>Code</th>
      <th>Features</th>
      <th>Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="4">Variant</td>
      <td>WK</td>
      <td>Cabin type</td>
      <td>
        <select v-model="selectedCabinType">
          <option v-for="option in cabinTypes" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>L</td>
      <td>Build Stage</td>
      <td>
        <select v-model="selectedBuildStage">
          <option v-for="option in buildStages" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>A</td>
      <td>Power Plant</td>
      <td>
        <select v-model="selectedPowerPlant">
          <option v-for="option in powerPlants" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>A</td>
      <td>Driven axles</td>
      <td>
        <select v-model="selectedDrivenAxles">
          <option v-for="option in drivenAxles" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>

    <tr>
      <td rowspan="5">Version</td>
      <td>G</td>
      <td>Mass Grade</td>
      <td>
        <select v-model="selectedMassGrade">
          <option v-for="option in massGrades" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>

    <tr>
      <td>C</td>
      <td>Trailer coupling</td>
      <td>
        <select v-model="selectedTrailerCoupling">
          <option v-for="option in trailerCouplings" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>C</td>
      <td>Engine capacity</td>
      <td>
        <select v-model="selectedEngineCapacity">
          <option v-for="option in engineCapacitys" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>D</td>
      <td>Emission</td>
      <td>
        <select v-model="selectedEmission">
          <option v-for="option in engineEmissions" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    <tr>
      <td>G</td>
      <td>Wheelbase</td>
      <td>
        <select v-model="selectedWheelbase">
          <option v-for="option in engineWheelbases" v-bind:value="option.value">
            {{ option.key }}
          </option>
        </select>
      </td>
    </tr>
    </tbody>
  </table>
</template>


<script>
  export default {
    name: "annex_A",
    props: ['value'],
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      }
    },
    data: () => ({
      selectedCabinType: undefined,
      selectedBuildStage: undefined,
      selectedPowerPlant: undefined,
      selectedDrivenAxles: undefined,
      selectedMassGrade: undefined,
      selectedTrailerCoupling: undefined,
      selectedEngineCapacity: undefined,
      selectedEmission: undefined,
      selectedWheelbase: undefined,
      cabinTypes: [
        {"key": "WS", "value": "[{'WS':'Wider king cabin'}]"},
        {"key": "WK", "value": "[{'WK':'Wider single cabin'}]"},
        {"key": "※", "value": "[{'WS':'Wider king cabin'},{'WK':'Wider single cabin'}]"}],
      buildStages: [
        {"key": "L", "value": "[{'L':'Lorry, completed'}]"},
        {"key": "C", "value": "[{'C':'Cab chassis, incomplete'}]"},
        {"key": "V", "value": "[{'V':'Van, completed'}]"},
        {
          "key": "※",
          "value": "[{'L':'Lorry, completed'},{'C':'Cab chassis, incomplete'},{'V':'Van, completed'}]"
        }],
      powerPlants: [{"key": "A", "value": "[{'A':'Engine, L4'}]"},
        {"key": "B", "value": "[{'B':'Engine, L6'}]"},
        {"key": "E", "value": "[{'E':'Electrical'}]"},
        {
          "key": "※",
          "value": "[{'A':'Engine, L4'},{'B':'Engine, L6'},{'E':'Electrical'}]"
        }],
      drivenAxles: [{"key": "A", "value": "[{'A':'4×2'}]"},
        {"key": "B", "value": "[{'B':'4×4'}]"},
        {
          "key": "※",
          "value": "[{'A':'4×2'},{'B':'4×4'}]"
        }],
      massGrades: [{"key": "A", "value": "[{'A':'Grade A≤5500Kg'}]"},
        {"key": "B", "value": "[{'B':'5500kg<Grade B≤ 6000kg'}]"},
        {"key": "C", "value": "[{'C':'6000kg<Grade C≤ 6800kg'}]"},
        {"key": "D", "value": "[{'D':'6800kg<Grade D≤ 7200kg'}]"},
        {"key": "E", "value": "[{'E':'7200kg<Grade E≤ 7500kg'}]"},
        {"key": "F", "value": "[{'F':'7500kg<Grade F≤ 8500kg'}]"},
        {"key": "G", "value": "[{'G':'8500kg<Grade G≤ 9000kg'}]"},
        {"key": "H", "value": "[{'H':'9000 kg<Grade H≤ 10000kg'}]"},
        {
          "key": "※",
          "value": "[{'A':'Grade A≤5500Kg'},{'B':'5500kg<Grade B≤ 6000kg'}," +
            "{'C':'6000kg<Grade C≤ 6800kg'},{'D':'6800kg<Grade D≤ 7200kg'}," +
            "{'E':'7200kg<Grade E≤ 7500kg'},{'F':'7500kg<Grade F≤ 8500kg'}," +
            "{'G':'8500kg<Grade G≤ 9000kg'},{'H':'9000 kg<Grade H≤ 10000kg'}]"
        }],
      trailerCouplings: [{"key": "A", "value": "[{'A':'Coupling with'}]"},
        {"key": "C", "value": "[{'C':'Coupling without'}]"},
        {
          "key": "※",
          "value": "[{'A':'Coupling with'},{'C':'Coupling without'}]"
        }],
      engineCapacitys: [{"key": "A", "value": "[{'A':'2746ml'}]"},
        {"key": "B", "value": "[{'B':'2951ml'}]"},
        {"key": "C", "value": "[{'C':'3760ml'}]"},
        {"key": "D", "value": "[{'D':'3900ml'}]"},
        {"key": "E", "value": "[{'E':'3960ml'}]"},
        {"key": "F", "value": "[{'F':'4752ml'}]"},
        {"key": "G", "value": "[{'G':'Electrical Motor'}]"},
        {
          "key": "※",
          "value": "[{'A':'2746ml'},{'B':'2951ml'}," +
            "{'C':'3760ml'},{'D':'3900ml'}," +
            "{'E':'3960ml'},{'F':'4752ml'}," +
            "{'G':'Electrical Motor'}]"
        }],
      engineEmissions: [{"key": "A", "value": "[{'A':'EU2'}]"},
        {"key": "B", "value": "[{'B':'EU3'}]"},
        {"key": "C", "value": "[{'C':'EU4'}]"},
        {"key": "D", "value": "[{'D':'EU5'}]"},
        {"key": "E", "value": "[{'E':'EU6'}]"},
        {"key": "F", "value": "[{'F':'Zero Emission'}]"},
        {
          "key": "※",
          "value": "[{'A':'EU2'},{'B':'EU3'}," +
            "{'C':'EU4'},{'D':'EU5'}," +
            "{'E':'EU6'},{'F':'Zero Emission'}"
        }],
      engineWheelbases: [{"key": "A", "value": "[{'A':'2800mm'}]"},
        {"key": "B", "value": "[{'B':'3365mm'}]"},
        {"key": "C", "value": "[{'C':'3845mm'}]"},
        {"key": "D", "value": "[{'D':'4175mm'}]"},
        {"key": "E", "value": "[{'E':'4475mm'}]"},
        {
          "key": "※",
          "value": "[{'A':'2800mm'},{'B':'3365mm'}," +
            "{'C':'3845mm'},{'D':'4175mm'}," + "{'E':'4475mm'}"
        }],
    }),
  }
</script>
