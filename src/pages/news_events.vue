<template>
  <div class="container page-content">
    <div class="card mb-5" v-for="(ci, cidx) in newsList" :key="'news-' + cidx">
      <div class="card-body">
        <h5 class="card-date">{{ ci.date }}</h5>
        <h5 @click="toNewsPage(ci)" class="card-title mb-3 mt-2">{{ ci.title }}</h5>
        <p class="card-text">{{ ci.summary }}</p>
      </div>
    </div>

    <div class="pag-bar">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link"><i class="bi bi-caret-left-fill"></i></a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item">
            <a class="page-link"><i class="bi bi-caret-right-fill"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "First Circular of Strati 2026",
          date: "2025-01-02",
          summary:
            "",
          to: "/pdf/First_Circular_of_Strati_2026.pdf",
        },
        {
          title: "Travel to Suzhou",
          date: "2025-01-02",
          summary:
            "",
          to: "/page/travel_to_suzhou.html",
        },
        {
          title: "Call for Sessions",
          date: "2025-01-02",
          summary:
            "",
          to: "/page/call_for_sessions.html",
        },
        {
          title: "Visa policies",
          date: "2025-01-02",
          summary:
              "",
          to:  "/page/visa_policies.html",
        },
        {
          title: "Congress Schedule",
          date: "2025-01-02",
          summary:
            "",
          to: "/page/congress_schedule.html",
        },
        {
          title: "Registration and fees",
          date: "2025-01-02",
          summary:
            "",
          to: "/page/registration.html",
        },
      ],
    };
  },
  methods: {
    toNewsPage(ci) {
      if (ci.to) {
        this.$router.push(ci.to);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 3px 16px 0px rgba(106, 0, 5, 0.07);
  background: rgb(255, 255, 255);
  border: none;
  cursor: pointer;

  .card-date {
    color: #1b3c90;
    font-size: 16px;
  }

  .card-title {
    font-size: 26px;
    font-weight: bold;
  }

  &:hover {
    box-shadow: 0px 6px 20px 0px rgba(106, 0, 5, 0.15);
    .card-title {
      color: #1b3c90;
    }
  }
}

.pag-bar {
}
</style>
