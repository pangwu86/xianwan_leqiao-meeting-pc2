<template>
  <div class="container page-content">
    <h2>Travel to Suzhou</h2>
    <p>&nbsp;</p>
    <p>Shanghai is the largest city in China and Suzhou is next to Shanghai and has direct trains and buses access to the Shanghai airports. It takes half hour to the Shanghai city center from Suzhou. There are lots of direct flights from European, North American, Oceanian and African countries to Shanghai, main nonstop flights are listed:
    </p>
    <p>&nbsp;</p>
    <p>
      <table class="table table-bordered table-colored table-striped">
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Airport</th>
              <th>Nonstop Flights</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(td, tidx) in tableData" :key="'ti-' + tidx">
              <td class="td-colored" v-if="td.d1" :rowspan="td.d1rowspan || 1">{{ td.d1 }}</td>
              <td v-if="td.d2" :rowspan="td.d2rowspan || 1">{{ td.d2 }}</td>
              <td v-if="td.d3">{{ td.d3 }}</td>
              <td v-if="td.d4">{{ td.d4 }}</td>
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
        d1: 'US',
        d1rowspan: 3,
        d2: "New York",
        d3: "Kennedy International Airport",
        d4: "China Eastern Airlines"
      }, {
        d2: "Los Angeles",
        d3: "Los Angeles International Airport",
        d4: "United Airlines / China Eastern Airlines"
      }, {
        d2: "San Francisco",
        d3: "San Francisco International Airport",
        d4: "United Airlines"
      },{
        d1: 'Canada',
        d2: "Toronto",
        d3: "Toronto Pearson International Airport",
        d4: "China Eastern Airlines"
      }, {
        d1: 'UK',
        d1rowspan: 2,
        d2: "London",
        d2rowspan: 2,
        d3: "Gatwick Airport",
        d4: "China Eastern Airlines / Air China"
      },{
        
        d3: "London Heathrow Airport",
        d4: "British Airways / China Eastern Airlines / China Southern Airlines"
      },{
        d1: 'Russia',
        d2: "Moscow",
        d3: "Sheremetyevo Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Germany',
        d2: "Frankfurt Airport",
        d3: "Frankfurt Airport",
        d4: "Lufthansa"
      }, {
        d1: 'France',
        d2: "Paris",
        d1rowspan: 2,
        d3: "Paris Charles de Gaulle Airport",
        d4: "China Eastern Airlines / Air France"
      },{
        
        d2: "Marseille",
        d3: "Marseille Provence Airport",
        d4: "China Eastern Airlines / Shanghai Airlines"
      },{
        d1: 'Italy',
        d2: "Rome",
        d3: "Fiumicino – Leonardo Da Vinci International Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Netherlands',
        d2: "Amsterdam",
        d3: "Schiphol Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Spain',
        d1rowspan: 2,
        d2: "Madrid",
        d3: "Madrid Barajas Airport",
        d4: "China Eastern Airlines"
      },{
        d2: "Barcelona",
        d3: "Barcelona Airport",
        d4: "Air China"
      },{
        d1: 'Australia',
        d1rowspan: 3,
        d2: "Sydney",
        d3: "Kingsford Smith Airport",
        d4: "China Eastern Airlines"
      },{
        
        d2: "Melbourne",
        d3: "Melbourne Airport",
        d4: "China Eastern Airlines / China Eastern Airlines"
      },{
        d2: "Brisbane",
        d3: "Brisbane Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Egypt',
        d2: "Cairo",
        d3: "Cairo International Airport",
        d4: "Egypt Air / China Eastern Airlines"
      },{
        d1: 'Qatar',
        d2: "Doha",
        d3: "Hamad International Airport",
        d4: "Qatar Airways"
      }]
    }
  }
};
</script>

<style></style>
