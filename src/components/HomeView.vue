<template>
  <!-- banner -->
  <div class="banner-container">
    <div class="container">
      <div class="banner-info">
        <div class="title">STRATI 2026</div>
        <div class="sub-title">5th International Congress on Stratigraphy</div>
        <div class="other">June 28 – July 3, 2026，Suzhou，China</div>
      </div>
    </div>
  </div>

  <!-- welcome -->
  <div class="welcome-container mt-5">
    <div class="header mb-3">
      <div class="container">
        <div class="row">
          <div class="col-4 home-title">Welcome</div>
          <div class="col-8 desc">
            Following the 1st congress in Lisbon (Portugal) in 2013, and
            additional congresses organized in Graz (Austria) in 2015 and Milan
            (Italy) in 2019, the 4th International Congress on Stratigraphy has
            been delegated by the International Commission on Stratigraphy (ICS)
            to Lille (France).
          </div>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="container mb-5">
        <div class="row">
          <div class="col-4">
            <div class="read-desc">
              With famous pioneers, such as Cuvier and Lamarck, France is
              considered the birthplace of palaeontology (the word
              ‘paléontologie’ was created by de Blainville in 1822), and French
              scientists were also the first to develop stratigraphical
              concepts. For instance, d’Orbigny introduced stages as …
            </div>
            <div class="home-btn mt-3">Read more</div>
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
            <div class="title">Themes</div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu2.png" alt="" />
            <div class="title">Plenary/Invited Speakers</div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu3.png" alt="" />
            <div class="title">Program</div>
          </div>
          <div class="col welcom-menu-btn">
            <img src="../imgs/welcome_menu4.png" alt="" />
            <div class="title">Registration</div>
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
          <div class="col-4 home-title">Important Dates</div>
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
              <div class="content">{{ ti.content }}</div>
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
          <div class="col-4 home-title">News & Events</div>
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
            <div class="news-item row">
              <div class="title col-9">{{ ni.title }}</div>
              <div class="date col-3">{{ ni.date }}</div>
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
          <div class="fb-bg">
            <div class="fb-title">PROGRAMME</div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg2">
            <div class="fb-title">FIELD TRIPS</div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg3">
            <div class="fb-title">LOCATION</div>
          </div>
        </div>
        <div class="fb-item">
          <div class="fb-bg bg4">
            <div class="fb-title">THE VENUE</div>
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
          content: "Distribution of the final circular with programme",
        },
        {
          title: "February 28th, 2025",
          content: "Abstract submission and early registration deadline",
        },
        {
          title: "December 2025",
          content: "2nd circular issued - Download",
        },
      ],
      newsList: [
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
        {
          title: "IMA 2026 website online",
          date: "2025-01-02",
        },
      ],
    };
  },
  methods: {
    changeTimeLineIdx(idx) {
      this.timeLineIdx = idx;
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

        .date {
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
    }

    .fb-title {
      width: 80%;
      font-size: 36px;
      color: #fff;
      text-align: left;
    }
  }
}
</style>
