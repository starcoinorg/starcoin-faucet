<template>
  <div class="vertical-center">
    <div class="container">
      <div class="row" style="margin-bottom: 16px;">
        <div class="col-lg-12">
          <h1 style="text-align: center;">
            <i class="fa fa-bath" aria-hidden="true" /> {{ network }} {{ $t('stc-authenticated') }} {{ $t('stc-faucet') }}
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="input-group">
            <input id="url" name="url" type="text" class="form-control" :placeholder="$t('stc-social-network-URL')">
            <span class="input-group-btn">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('stc-give-me') }} 3 STC
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
          <h3>{{ $t('stc-how-work') }}</h3>
          <p>{{ $t('stc-text-01') }}{{ network }} {{ $t('stc-text-02') }}</p>
          <dl class="dl-horizontal">
            <dt style="width: auto; margin-left: 40px;">
              <i class="fa fa-twitter" aria-hidden="true" style="font-size: 36px;" />
            </dt>
            <dd style="margin-left: 88px; margin-bottom: 10px;">
              {{ $t('stc-text-03') }}<a :href="getTwitterUrl()" target="_about:blank">tweet</a> {{ $t('stc-text-04') }}<br>{{ $t('stc-text-05') }}<a href="https://support.twitter.com/articles/80586" target="_about:blank">{{ $t('stc-tweets-URL') }}</a> {{ $t('stc-text-06') }}
            </dd>
          </dl>
          <p>{{ $t('stc-text-07') }}</p>
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
