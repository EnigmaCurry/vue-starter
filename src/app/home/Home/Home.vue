<template>
  <div :class="$style.home">
    <stage />
    <dev-ex />
    <enterprise-ready />
    <user-experience />
    <quick-start />
  </div>
</template>

<script lang="ts">
  import Stage           from '../Stage/Stage';
  import DevEx           from '../DevEx/DevEx';
  import EnterpriseReady from '../EnterpriseReady/EnterpriseReady';
  import UserExperience  from '../UserExperience/UserExperience';
  import QuickStart      from '../QuickStart/QuickStart';

  export default {
    metaInfo:   {
      title: 'vue-starter - an enterprise ready boilerplate with Vue.JS',
      meta:  [
        {
          name:    'description',
          content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps built with Vue.JS',
        },
        {
          name:    'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps built with Vue.JS',
        },
        {
          name:    'og:description',
          content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps built with Vue.JS',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/assets/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps built with Vue.JS',
        },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/assets/logo.png' },
        {
          name:    'twitter:description',
          content: 'vue-starter - an enterprise ready boilerplate for isomorphic, progressive web apps built with Vue.JS',
        },
      ],
    },
    components: {
      Stage,
      DevEx,
      EnterpriseReady,
      UserExperience,
      QuickStart,
    },
    computed:   {},
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .home {
    h2 {
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    }

    :global {
      .vuePanel {
        height: 100%;
      }

      .vueGridItem {
        margin-bottom: $grid-unit * 4;
      }

      .featureSection {
        padding: $grid-unit * 4 0;
      }
    }

    @include media(tabletPortrait) {
      :global {
        .featureSection {
          padding: $grid-unit * 14 0;
        }
      }
    }

    @include media(tabletLandscape) {
      :global {
        .featureSection {
          padding: $grid-unit * 20 0;
        }
      }
    }
  }
</style>
