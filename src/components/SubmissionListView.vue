<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">List of Submission</h2>
            </div>
            <!-- 表单内容 -->
            <div class="row pt-4 proposal-table">
              <div class="mb-3 col-12">
                <div class="position-relative">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Submission Title</th>
                        <th scope="col">Submission Time</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="!loading">
                      <tr
                        v-for="(di, didx) in dataList"
                        :key="di.conferenceProposalId"
                      >
                        <td>{{ didx + 1 }}</td>
                        <td>{{ di.submissionTitle }}</td>
                        <td>{{ di.createTime.substring(0, 19) }}</td>
                        <td>
                          <div class="d-grid gap-2 d-md-block btn-container">
                            <button
                              type="button"
                              class="btn btn-outline-success btn-sm"
                              v-tooltip:top.accent="'View'"
                              @click="viewData(di)"
                            >
                              <i class="bi bi-file-earmark-text-fill"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              v-tooltip:top.accent="'Edit'"
                              @click="editData(di)"
                            >
                              <i class="bi bi-pencil-square"></i>
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                              v-tooltip:top.accent="'Delete'"
                              @click="deleteData(di)"
                            >
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="no-data" v-if="!loading && dataList.length == 0">
                    NO DATA
                  </div>
                  <div class="no-data" v-if="loading">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 更新 -->
            <div class="d-grid mt-5">
              <button
                class="btn btn-primary"
                type="submit"
                @click="toSubmitProposal"
              >
                Create New Submission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
  </div>
</template>

<script>
import { clearToken, getToken } from "../api/token.js";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      userProfile: null,
      dataList: [],
      loading: false,
    };
  },
  computed: {},
  methods: {
    toSubmitProposal() {
      this.$router.push("/submission");
    },
    loadDataList() {
      this.loading = true;
      this.$api.loadSubmissionList().then((resp) => {
        this.dataList = resp.data || [];
        this.loading = false;
      });
    },
    viewData(di) {
      this.$router.push(`/submission?id=${di.conferenceSubmissionId}`);
    },
    editData(di) {
      this.$router.push(
        `/submission?id=${di.conferenceSubmissionId}&mode=edit`
      );
    },
    deleteData(di) {
      if (
        window.confirm(
          "Are you sure to delete this session, it will not be restored after deletion?"
        )
      ) {
        this.loading = true;
        this.$api
          .deleteSubmission({
            conferenceSubmissionId: di.conferenceSubmissionId,
          })
          .then((resp) => {
            console.log(resp);
            if (resp.code == 200) {
              this.loadDataList();
            } else {
              this.loading = false;
              alert(resp.msg);
            }
          });
      }
    },
  },
  mounted() {
    this.userProfile = this.getStorage("user_profile");
    this.loadDataList();
  },
};
</script>

<style lang="scss" scoped>
.sign-tip {
  text-align: center;
  font-size: 16px;
}

.form-subtitle {
  display: inline-block;
  position: relative;
  font-size: 18px;
  line-height: 1.45;
  padding-bottom: 8px;
  position: relative;
  margin-bottom: 30px;
  margin-top: 20px;
  border-bottom: 2px solid #590a54;
}

.btn-container {
  .btn {
    margin-right: 4px;
  }
}

.proposal-table {
  min-height: 400px;
}

.no-data {
  display: block;
  text-align: center;
  margin: 100px auto;
}
</style>
