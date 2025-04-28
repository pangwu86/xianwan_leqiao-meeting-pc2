<template>
  <div class="container page-content">
    <h1>Congress Schedule</h1>
    <p>
      <table class="table table-bordered table-striped table-colored">
          <thead style="text-align: center">
            <tr>
              <th>Date</th>
              <th>Congress</th>
            </tr>
          </thead>
          <tbody style="text-align: center">
            <tr v-for="(td, tidx) in tableData" :key="'ti-' + tidx">
              <td class="td-colored" style="width: 25%;">{{ td.date }}</td>
              <td>{{ td.name }}</td>
            </tr>
          </tbody>
      </table>
    </p>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      tableData: [{
        date: 'June 24th -28th',
        name: "Pre-conference field excursions"
      },{
        date: 'June 28th ',
        name: "Onsite registration, workshops, icebreaker"
      },{
        date: 'June 29th -30th',
        name: "Scientific symposia"
      },{
        date: 'July 1st',
        name: "Mid-conference field excursion"
      },{
        date: 'July 2nd-3rd',
        name: "Scientific symposia"
      },{
        date: 'July 4th-July 10th',
        name: "Post-conference field excursions"
      }]
    }
  }
};
</script>

<style></style>
