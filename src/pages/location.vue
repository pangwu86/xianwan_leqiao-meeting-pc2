<template>
  <div class="container page-content">
    <h2>Location</h2>
    <p>&nbsp;</p>
    <p>Strati 2026 will be held in Suzhou. Suzhou, located at the lower reaches of the Yangtze River in southeastern Jiangsu Province, eastern China and next to Shanghai City, is one of hottest tourism destinations in China. It is also a place celebrated for its Chinese traditional gardens, ancient canals, and cultural heritage. Several locations are stratigraphically and geologically significant within the city, including Taihu Xishan Geopark, Tiger Hill (Jurassic Volcanic Rock Layers), Archaeological Park of the Caoxieshan Site–Neolithic Period, Granite Landforms of Lingyan Mountain and Tianping Mountain and Two GSSPs and end-Permian mass extinction at the Meishan Section, Changxing nearby. Suzhou is also a historical city in the Yangtze delta area. Its Most Famous Historical Sites and Cultural Heritage of Suzhou include The Humble Administrator's Garden (Zhuo Zheng Yuan), Zhouzhuang, Kunqu Opera.</p>
    <div class="image-container">
      <img class="page-img" src="../imgs/venue1.jpg" alt="">
      <img class="page-img" src="../imgs/venue2.jpg" alt="">
    </div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>Location in map</h2>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h2>Travel to Suzhou</h2>
    <p>&nbsp;</p>
    <p>Shanghai is the largest city in China and Suzhou is next to Shanghai and has direct trains and buses access to Shanghai Pudong and Hongqiao airports.
      <b>Shuttles will be arranged between Shanghai airports and conference venue on June 28th and July 3rd.</b> Main direct flights from European, North America, Oceanian and African countries to Shanghai are listed below:
    </p>
    <p>&nbsp;</p>
    <p>
      <table class="table table-bordered table-colored table-striped">
        <thead style="text-align: center">
        <tr>
          <th>Country</th>
          <th>City</th>
          <th>Airport</th>
          <th>Nonstop Flights</th>
        </tr>
        </thead>
        <tbody style="text-align: center">
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
<style>
.image-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  width: 100%; /* 宽度设置为100%以适应容器 */
  margin: 0 auto; /* 确保容器在父容器中居中 */
}

.page-img {
  max-width: 47%; /* 调整图片宽度以适应一行显示 */
  height: auto;
  margin: 0 0.5%; /* 添加一些间距 */
}
</style>
