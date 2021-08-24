<template>
  <div class="vertical-center">
    <div class="container">
      <div class="row" style="margin-bottom: 16px;">
        <div class="col-lg-12">
          <h1 style="text-align: center;">
            <i class="fa fa-bath" aria-hidden="true" /> {{ network }} Authenticated {{ $t('stc-faucet') }}
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="input-group">
            <input id="url" name="url" type="text" class="form-control" placeholder="Social network URL containing your Starcoin address...">
            <span class="input-group-btn">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Give me 3 STC
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
      <div class="row" style="margin-top: 32px;">
        <div class="col-lg-12">
          <h3>How does this work?</h3>
          <p>This STC faucet is running on the {{ network }} network. To prevent malicious actors from exhausting all available funds or accumulating enough STC to mount long running spam attacks, requests are tied to common 3rd party social network accounts. Anyone having a Twitter account may request funds within the permitted limits.</p>
          <dl class="dl-horizontal">
            <dt style="width: auto; margin-left: 40px;">
              <i class="fa fa-twitter" aria-hidden="true" style="font-size: 36px;" />
            </dt>
            <dd style="margin-left: 88px; margin-bottom: 10px;">
              To request funds via Twitter, make a <a :href="getTwitterUrl()" target="_about:blank">tweet</a> with your Starcoin address pasted into the contents (surrounding text doesn't matter).<br>Copy-paste the <a href="https://support.twitter.com/articles/80586" target="_about:blank">tweets URL</a> into the above input box and fire away!
            </dd>
          </dl>
          <p>You can track the current pending requests below the input field to see how much you have to wait until your turn comes.</p>
          <!--<em>The faucet is running invisible reCaptcha protection against bots.</em>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      network: 'Branard'
    };
  },
  methods: {
    getTwitterUrl() {
      return `https://twitter.com/intent/tweet?text=Requesting%20faucet%20funds%20into%200x0000000000000000000000000000000000000000%20on%20the%20%23${this.network}%20%23STC%20test%20network.`;
    }
  }
};
</script>

<style lang="less" scoped>

  .vertical-center {
    min-height: 100vh;
    display: flex;
    align-items: center;
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
