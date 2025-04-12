<template>
  <div class="row justify-content-center">
    <!-- 表格 -->
    <div class="col-12">
      <div class="card shadow-sm mb-5">
        <div class="card-body">
          <div class="needs-validation mb-5">
            <!-- 标题 -->
            <div class="row g-2">
              <h2 class="text-center">List of Session Proposals</h2>
            </div>
            <!-- 表单内容 -->
            <div class="row pt-4 proposal-table">
              <div class="mb-3 col-12">
                <div class="position-relative">
                  <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Session Title</th>
                      <th scope="col">Submission Time</th>
                      <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(di, didx) in dataList"
                        :key="di.conferenceProposalId"
                    >
                      <td>{{ didx + 1 }}</td>
                      <td>{{ di.proposalTitle }}</td>
                      <td>{{ di.submitTime }}</td>
                      <td>
                        <div class="d-grid gap-2 d-md-block btn-container">
                          <button
                              type="button"
                              class="btn btn-outline-success btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="View"
                              data-bs-placement="top"
                              @click="viewData(di)"
                          >
                            <i class="bi bi-file-earmark-text-fill"></i>
                          </button>
                          <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="Edit"
                              data-bs-placement="top"
                              @click="editData(di)"
                          >
                            <i class="bi bi-pencil-square"></i></button
                          >
                          <button
                              type="button"
                              class="btn btn-outline-danger btn-sm"
                              data-bs-toggle="tooltip"
                              data-bs-title="Delete"
                              data-bs-placement="top"
                              @click="deleteData(di)"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>

                  <div class="no-data" v-if="dataList.length == 0">NO DATA</div>
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
                Create New Proposal
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
import {clearToken, getToken} from "../api/token.js";
import {Modal, Tooltip} from "bootstrap";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      userProfile: null,
      dataList: [],
    };
  },
  computed: {},
  methods: {
    toSubmitProposal() {
      this.$router.push("/proposal");
    },
    loadDataList() {
      this.$api.loadProposalList().then((resp) => {
        this.dataList = resp.data || [];
        this.tooltipRefresh();
      });
    },
    viewData(di) {
      this.$router.push(`/proposal?id=${di.conferenceProposalId}`);
    },
    editData(di) {
      this.$router.push(
          `/proposal?id=${di.conferenceProposalId}&mode=edit`
      );
    },
    deleteData(di) {
      if (
          window.confirm(
              "Are you sure to delete this session, it will not be restored after deletion?"
          )
      ) {
        this.$api
            .deleteProposal({
              conferenceProposalId: di.conferenceProposalId,
            })
            .then((resp) => {
              console.log(resp);
              if (resp.code == 200) {
                this.loadDataList();
              } else {
                alert(resp.msg);
              }
            });
      }
    },
    tooltipRefresh() {
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
