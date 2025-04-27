<template>
  <!-- welcome -->
  <div class="welcome-container mt-5">
    <div class="header mb-3">
      <div class="container">
        <div class="row">
          <div class="col-4 home-title">Welcome</div>
          <div class="col-8 desc" style="font-size: 20px">
            We cordially invite you to attend
            <i
              ><b
                >STRATI2026 - Exploring the Depths: Bridging Tradition and
                Innovation in Stratigraphy,</b
              ></i
            >
            to be held from June 28th to July 3rd, 2026 at Suzhou DDE center,
            Jiangsu province, China..
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="container mb-5">
        <div class="row">
          <div class="col-4">
            <div class="read-desc">
              The STRATI 2026 Congress has long served as a premier platform for
              stratigraphic research, with its legacy rooted in Europe. As the
              event’s global influence continues to expand, particularly within
              China’s thriving stratigraphic community, hosting the next
              congress in Suzhou, China, represents a historic milestone …
            </div>
            <div
              class="home-btn mt-3"
              onclick="window.location.href='/page/welcome_strati_2026.html'"
              style="font-size: 20px"
            >
              Read more
            </div>
          </div>
          <div class="col-8">
            <div class="news-img"></div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="welcome-menu-btns row">
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu1.png" alt="" />
            <div
              class="title"
              style="font-size: 20px"
              onclick="window.location.href='/page/scientific_session_types.html'"
            >
              Sessions
            </div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu2.png" alt="" />
            <div
              class="title"
              style="font-size: 20px"
              onclick="window.location.href='/page/wait.html'"
            >
              Plenary/Invited Speakers
            </div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu3.png" alt="" />
            <div
              class="title"
              style="font-size: 20px"
              onclick="window.location.href='/page/scientific_session_types.html'"
            >
              Programme
            </div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu4.png" alt="" />
            <div
              class="title"
              style="font-size: 20px"
              onclick="window.location.href='/page/registration.html'"
            >
              Registration
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Important Dates -->
  <div class="important-container mt-5">
    <div class="header mb-3">
      <div class="container">
        <div class="row">
          <div
            class="col-4 home-title"
            onclick="window.location.href='/page/important_dates.html'"
          >
            Important Dates
          </div>
          <div class="col-8 controls">
            <div class="home-btns">
              <div class="home-btn">
                <i class="bi bi-caret-left-fill"></i>
              </div>
              <div class="home-btn">
                <i class="bi bi-caret-right-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="timeline-container container">
        <div
          :class="'timeline-item ' + (tidx == timeLineIdx ? 'active' : '')"
          v-for="(ti, tidx) in timeLine"
          :key="ti.title"
          @click="changeTimeLineIdx(tidx)"
        >
          <div class="item-container">
            <div class="item-bg">
              <div class="title">{{ ti.title }}</div>
              <div class="icon"></div>
              <div class="content" style="font-size: 20px">
                {{ ti.content }}
              </div>
            </div>
          </div>
          <div class="item-sp" v-if="tidx != timeLine.length - 1"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- News&Events -->
  <div class="news-container mt-5">
    <div class="header mb-3">
      <div class="container">
        <div class="row">
          <div
            class="col-4 home-title"
            onclick="window.location.href='/page/news_events.html'"
          >
            News & Events
          </div>
          <div class="col-8 controls">
            <i>More+</i>
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="container">
        <div class="row">
          <div
            class="col-6"
            v-for="(ni, nidx) in newsList"
            :key="'news-item-' + nidx"
          >
            <div
              class="news-item row"
              style="font-size: 20px"
              @click="toNewsPage(ni)"
            >
              <div class="title col-9">{{ ni.title }}</div>
              <div class="date col-3" style="font-size: 20px">
                {{ ni.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 4 ImgBtn -->

  <div class="fourbtns-container mt-5">
    <div class="container">
      <div class="fb-list">
        <div class="fb-item">
          <div class="fb-bg bg1">
            <div
              class="fb-title"
              onclick="window.location.href='/page/scientific_session_types.html'"
            >
              PROGRAMME
            </div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg2">
            <div
              class="fb-title"
              onclick="window.location.href='/page/strati_2026_field_excursions.html'"
            >
              FIELD TRIPS
            </div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg3">
            <div
              class="fb-title"
              onclick="window.location.href='/page/venue.html'"
            >
              LOCATION
            </div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg4">
            <div
              class="fb-title"
              onclick="window.location.href='/page/venue.html'"
            >
              VENUE
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeLineIdx: 0,
      timeLine: [
        {
          title: "May 1st, 2025",
          content: "Start of session proposal submission",
        },
        {
          title: "December 1st, 2025",
          content: "End of call for sessions",
        },
        {
          title: "December 31th, 2025",
          content: "Dispatch of second circular",
        },
        {
          title: "December 31th, 2025",
          content: "Opening abstract submission",
        },
        {
          title: "December 31th, 2025",
          content: "Opening registration",
        },
        {
          title: "March 15th, 2026",
          content: "Deadline for abstract submission",
        },
        {
          title: "March 15th, 2026",
          content: "Deadline for early bird registration",
        },
        {
          title: "May 30th, 2026",
          content: "Dispatch of third circular",
        },
      ],
      newsList: [
        {
          title: "First Circular of Strati2026",
          date: "2025-01-02",
          to: "welcome_strati_2026",
        },
        {
          title: "Travel to Suzhou",
          date: "2025-01-02",
          to: "/page/travel_to_suzhou.html",
        },
        {
          title: "Call for Sessions",
          date: "2025-01-02",
          to: "/page/call_for_sessions.html",
        },
        {
          title: "Visa policies",
          date: "2025-01-02",
          to: "/page/visa_policies.html",
        },
        {
          title: "Congress Schedule",
          date: "2025-01-02",
          to: "/page/call_for_sessions.html",
        },
        {
          title: "Registration and fees",
          date: "2025-01-02",
          to: "/page/registration.html",
        },
      ],
    };
  },
  methods: {
    changeTimeLineIdx(idx) {
      this.timeLineIdx = idx;
    },
    toNewsPage(ni) {
      if (ni.to) {
        this.$router.push(ni.to);
      }
    },
  },
};
</script>

<style lang="scss">
.home-title {
  font-size: 45px;
  font-family: "Arial";
  font-weight: bold;
  line-height: 1;
}

.home-btns {
  .home-btn {
    margin-left: 20px;
  }
}

.home-btn {
  display: inline-block;
  color: #fff;
  background-color: #1b3c90;
  padding: 6px 32px;
  font-size: 13px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
}

.banner-container {
  width: 100%;
  font-size: 14px;
  position: relative;
  height: 600px;

  .container {
    height: 100%;
  }

  &::before {
    content: "";
    background-image: url("../imgs/banner_item1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  &::after {
    content: "";
    background-image: url("../imgs/banner_left.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  .banner-info {
    color: #fff;
    font-family: "Arial";
    font-weight: bold;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .title {
      font-size: 90px;
    }
    .sub-title {
      font-size: 45px;
      width: 45%;
      line-height: 1;
    }
    .other {
      margin-top: 16px;
      color: #ffce00;
      font-size: 26px;
    }
  }
}

.welcome-container {
  .header {
    .row {
      align-items: flex-start;
    }

    .title {
      font-size: 50px;
      font-weight: bold;
      line-height: 1;
    }

    .desc {
      border-left: solid 4px #1b3c90;
      padding-left: 30px;
      // line-height: 1.5;
    }
  }

  .body {
    background-image: url("../imgs/welcome_body_bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 32px 0;

    .read-desc {
      width: 80%;
      font-family: "Arial", "sans-serif";
      font-size: 20px;
    }

    .news-img {
      width: 100%;
      height: 100%;
      border-left: solid 10px #1b3c90;
      background-image: url("../imgs/welcome_body_news1.jpg");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .welcome-menu-btns {
      height: 100px;
      width: 100%;
      background: #f2f4f7;
      border-radius: 50px 0 0 50px;
      position: relative;

      &::after {
        content: "";
        background: #f2f4f7;
        top: 0;
        left: 100%;
        bottom: 0;
        right: -30%;
        position: absolute;
      }

      .welcom-menu-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        img {
          width: 30px;
        }
        .title {
          font-size: 14px;
          color: #1b3c90;
        }
      }
    }
  }
}

.important-container {
  .header {
    .row {
      align-items: flex-start;
      height: 100%;
      justify-content: center;
    }

    .title {
      font-size: 45px;
      font-weight: bold;
      line-height: 1;
    }

    .controls {
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  .body {
    padding: 32px 0;
    .timeline-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    .timeline-item-sp {
      width: 10%;
    }

    .timeline-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      .item-container {
        width: 300px;
        height: 280px;
        background-image: url("../imgs/important_date_bg.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.active {
        .item-container {
          background-image: url("../imgs/welcome_body_news1.jpg");
          background-size: cover;
          .item-bg {
            background-color: rgba(27, 60, 144, 0.68);
            color: #fff;
          }
          .icon {
            display: none;
          }
        }
      }

      .item-sp {
        width: 190px;
        height: 4px;
        background: #1b3c90;
      }

      .item-bg {
        width: 85%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .title {
        font-weight: bold;
        font-style: italic;
        font-size: 20px;
        margin-bottom: 20px;
      }
      .icon {
        width: 30px;
        height: 25px;
        background-image: url("../imgs/logo2.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
      }
      .content {
        margin-top: 20px;
        width: 80%;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

.news-container {
  .header {
    .row {
      align-items: flex-start;
      height: 100%;
      justify-content: center;
    }

    .title {
      font-size: 45px;
      font-weight: bold;
      line-height: 1;
    }

    .controls {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      height: 45px;

      i {
        color: #1b3c90;
      }
    }
  }

  .body {
    padding: 32px 0;

    .news-item {
      width: 92%;
      padding: 16px;
      background: #f2f4f7;
      color: #000;
      font-size: 14px;
      cursor: pointer;

      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .date {
        text-align: right;
        font-size: 12px;
        font-style: italic;
        color: #1b3c90;
      }

      &:hover {
        width: 100%;
        background: #1b3c90;
        color: #fff;

        animation-name: widthHover;
        animation-duration: 0.5s;

        .date {
          color: #fff;
        }
      }

      @keyframes widthHover {
        from {
          width: 92%;
        }
        to {
          width: 100%;
          background: #1b3c90;
          color: #fff;
        }
      }
    }
  }
}

.fourbtns-container {
  position: relative;
  padding-bottom: 50px;

  &::after {
    content: "";
    background-image: url("../imgs/fourbtns_bg_left.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: -10%;
    bottom: 0;
    right: 50%;
    position: absolute;
    z-index: -1;
  }

  .fb-list {
    display: flex;
  }

  .fb-item {
    display: inline-flex;
    width: 25%;

    &:nth-child(even) {
      padding-bottom: 100px;
    }

    &:nth-child(odd) {
      padding-top: 100px;
    }

    .fb-bg {
      width: 100%;
      height: 600px;
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      cursor: pointer;

      &::before {
        content: "";
        background-image: url("../imgs/fourbtn_bg1.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      &.bg1 {
        &::before {
          border-radius: 50px 0 0 0;
        }
        &::after {
          border-radius: 50px 0 0 0;
        }
      }

      &.bg2 {
        &::before {
          background-image: url("../imgs/fourbtn_bg2.png");
        }
      }

      &.bg3 {
        &::before {
          background-image: url("../imgs/fourbtn_bg3.png");
        }
      }

      &.bg4 {
        &::before {
          background-image: url("../imgs/fourbtn_bg4.png");
          border-radius: 0 0 50px 0;
        }
        &::after {
          border-radius: 0 0 50px 0;
        }
      }

      &::after {
        content: "";
        background-color: #1b3c90;
        opacity: 0.25;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
      }

      &:hover {
        &::after {
          opacity: 0;
          animation-name: bgAfter;
          animation-duration: 0.5s;
        }
      }

      @keyframes bgAfter {
        from {
          opacity: 0.25;
        }
        to {
          opacity: 0;
        }
      }
    }

    .fb-title {
      width: 80%;
      padding-bottom: 20px;
      font-size: 36px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
