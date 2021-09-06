<template>
  <div class="vertical-center">
    <div class="container">
      <div class="row" style="margin-bottom: 16px">
        <div class="col-lg-12">
          <h1 style="text-align: center">
            <i class="fa fa-bath" aria-hidden="true" /> {{ network }}
            {{ $t("stc-authenticated") }} {{ $t("stc-faucet") }}
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="input-group">
            <input
              id="url"
              v-model="url"
              name="url"
              type="text"
              class="form-control"
              :placeholder="$t('stc-social-network-URL')"
            >
            <span class="input-group-btn">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="getCoin"
              >
                {{ $t("stc-give-me") }} 3 STC
                <!--<i class="fa fa-caret-down" aria-hidden="true" />-->
              </button>
              <!--<ul class="dropdown-menu dropdown-menu-right">-->
              <!--<li><a style="text-align: center;" onclick="tier= 0 ; grecaptcha.execute()">3 STC / 8 hours</a></li>-->
              <!--<li><a style="text-align: center;" onclick="tier= 1 ; grecaptcha.execute()">7.5 STC / 1 day</a></li>-->
              <!--<li><a style="text-align: center;" onclick="tier= 2 ; grecaptcha.execute()">18.75 STC / 3 days</a></li>-->
              <!--</ul>-->
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 32px">
      <div class="col-lg-6" style="">
        <div class="panel panel-small panel-default" style="">
          <div
            class="panel-body"
            style="padding: 0; overflow: auto; max-height: 300px"
          >
            <table
              id="requests"
              class="table table-condensed"
              style="margin: 0px"
            >
              <tbody>
                <tr v-for="(t, index) in list" :key="index">
                  <td v-if="t.timer > 0">
                    <div>
                      <td>
                        <pre style="margin: 0">{{
                          t.transfered_txn || ""
                        }}</pre>
                      </td>
                      <td
                        style="
                          width: 100%;
                          text-align: center;
                          vertical-align: middle;
                        "
                      >
                        &nbsp;&nbsp;&nbsp;funded&nbsp;&nbsp;&nbsp;
                        <Progress
                          :percent="99"
                          status="active"
                          hide-info
                          style="padding: 0 5px"
                        />
                      </td>
                    </div>
                  </td>
                </tr>
                <!-- <tr id="0x06161ec69ad7c2631923772a7edbba574d9d5cd1e06fd959ff5d4903d38f92e4">
                  <td><div style="background: url('http://pbs.twimg.com/profile_images/1365813022145576964/40DGpugL_normal.jpg'); background-size: cover; width:32px; height: 32px; border-radius: 4px;" /></td>  <td><pre>0x3fd9bfef6674dd146851fccdf0cd905b4d330b78</pre></td>  <td style="width: 100%; text-align: center; vertical-align: middle;">
                    funded    <div class="progress" style="height: 4px; margin: 0;">
                      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" style="width:100%;" />
                    </div>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <!-- <div class="panel-footer" style="">
            <table style="width: 100%">
              <tbody>
                <tr>
                  <td style="text-align: center;">
                    <i class="fa fa-rss" aria-hidden="true" style="" /> <span id="peers" style="">3</span> peers
                  </td>
                  <td style="text-align: center;">
                    <i class="fa fa-database" aria-hidden="true" /> <span id="block">9239675</span> blocks
                  </td>
                  <td style="text-align: center;">
                    <i class="fa fa-heartbeat" aria-hidden="true" /> <span id="funds">9.046256971665328e+56</span> Ethers
                  </td>
                  <td style="text-align: center;">
                    <i class="fa fa-university" aria-hidden="true" /> <span id="funded" style="">669019</span> funded
                  </td>
                </tr>
              </tbody>
            </table>
          </div> -->
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 32px">
      <div class="col-lg-12">
        <h3>{{ $t("stc-how-work") }}</h3>
        <p>{{ $t("stc-text-01") }} {{ network }} {{ $t("stc-text-02") }}</p>
        <dl class="dl-horizontal">
          <dt style="width: auto; margin-left: 40px">
            <i
              class="fa fa-twitter"
              aria-hidden="true"
              style="font-size: 36px"
            />
          </dt>
          <dd style="margin-left: 88px; margin-bottom: 10px">
            {{ $t("stc-text-03")
            }}<a :href="getTwitterUrl()" target="_about:blank">tweet</a>
            {{ $t("stc-text-04") }}<br>{{ $t("stc-text-05")
            }}<a
              href="https://support.twitter.com/articles/80586"
              target="_about:blank"
            >{{ $t("stc-tweets-URL") }}</a>
            {{ $t("stc-text-06") }}
          </dd>
        </dl>
        <p>{{ $t("stc-text-07") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

const apiDomain =
  process.env.VUE_APP_STARCOIN_FAUCET_API_DOMAIN || "http://localhost:8000";
const createUrl = `${apiDomain}/create`;
const getRecentlyUrl = `${apiDomain}/recently`;

// a few seconds ago 、 funded
const networkDefault = "barnard";
const networkMap = {
  barnard: {
    text: "Barnard",
  },
  halley: {
    text: "Halley",
  },
  proxima: {
    text: "Proxima",
  },
};

export default {
  data() {
    const pNetwork = this.$route.params["network"] || networkDefault;

    return {
      network: networkMap[pNetwork]["text"],
      networkMap: networkMap,
      list: [{ transfered_txn: null, timer: 0 }],
      timer: 30,
      url: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.getRecently();
    }, 30 * 1000);
  },
  methods: {
    getCoin() {
      axios
        .post(
          createUrl +
            `?network=${
              this.$route.params["network"]
            }&platform=twitter&url=${encodeURI(this.url)}`
        )
        .then((resp) => {
          const { status, detail } = resp.data;
          if (status === 0) {
            this.url = "";
            this.$Message.success(this.$t("stc-create-success"));
          }
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response) {
            const { detail } = error.response.data;
            this.url = "";
            this.$Message.error(detail);
          }
        })
        .finally((err, resp) => {});
    },
    getRecently() {
      axios.get(getRecentlyUrl + "?platform=twitter").then((resp) => {
        // console.log(resp.data);
        const data = resp.data;
        this.list = data;
        this.list.map((item, index) => {
          Vue.set(item, "timer", this.timer);
          // console.log(this.list, item);
          const id = setInterval(() => {
            item.timer > 0 ? item.timer-- : clearInterval(id);
          }, 1000);
        });
      });
    },
    getTwitterUrl() {
      return `https://twitter.com/intent/tweet?text=Requesting%20faucet%20funds%20into%200x0000000000000000000000000000000000000000%20on%20the%20%23${this.network}%20%23STC%20test%20network.`;
    },
  },
};
</script>

<style lang="less" scoped>
.vertical-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.input-group .form-control {
  min-width: 360px;
}
</style>
