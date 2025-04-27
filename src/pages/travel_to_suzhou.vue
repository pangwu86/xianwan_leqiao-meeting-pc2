<template>
  <div class="container page-content">
    <h2>Travel to Suzhou</h2>
    <p>&nbsp;</p>
    <p>Shanghai is the largest city in China and Suzhou is next to Shanghai and has direct trains and buses access to the Shanghai airports. It takes half hour to the Shanghai city center from Suzhou. There are lots of direct flights from European, North American, Oceanian and African countries to Shanghai, main nonstop flights are listed:
    </p>
    <p>
      <table class="table table-bordered">
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
              <td>{{ td.d1 }}</td>
              <td>{{ td.d2 }}</td>
              <td>{{ td.d3 }}</td>
              <td>{{ td.d4 }}</td>
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
        d1: ' ',
        d2: "New York",
        d3: "Kennedy International Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'US',
        d2: "Los Angeles",
        d3: "Los Angeles International Airport",
        d4: "United Airlines / China Eastern Airlines"
      },{
        d1: ' ',
        d2: "San Francisco",
        d3: "San Francisco International Airport",
        d4: "United Airlines"
      },{
        d1: 'Canada',
        d2: "Toronto",
        d3: "Toronto Pearson International Airport",
        d4: "China Eastern Airlines"
      },{
        d1: ' ',
        d2: ' ',
        d3: "Gatwick Airport",
        d4: "China Eastern Airlines / Air China"
      },{
        d1: 'UK',
        d2: "London",
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
      },{
        d1: ' ',
        d2: "Paris",
        d3: "Paris Charles de Gaulle Airport",
        d4: "China Eastern Airlines / Air France"
      },{
        d1: 'France',
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
        d1: ' ',
        d2: "Madrid",
        d3: "Madrid Barajas Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Spain',
        d2: "Barcelona",
        d3: "Barcelona Airport",
        d4: "Air China"
      },{
        d1: ' ',
        d2: "Sydney",
        d3: "Kingsford Smith Airport",
        d4: "China Eastern Airlines"
      },{
        d1: 'Australia',
        d2: "Melbourne",
        d3: "Melbourne Airport",
        d4: "China Eastern Airlines / China Eastern Airlines"
      },{
        d1: ' ',
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
