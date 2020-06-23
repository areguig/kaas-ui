<template>
  <div>
    <section class="section is-size-7">
      <div v-if="error" class="notification is-danger is-light">{{error}}</div>
      <div v-if="failure" class="notification is-danger is-light">
        <strong>🐞 line {{failure.line}}</strong>
        : {{failure.doc_string? failure.doc_string.value : failure.result.error_message}} 🐞
      </div>
      <div v-if="passed" class="notification is-success is-light">🏆 All green! Well done 🤘🤘</div>
      <div class="columns">
        <div class="column is-half">
          <label class="label">Feature</label>
          <codemirror ref="cmFeature" v-model="feature" :options="featureOptions"></codemirror>
        </div>
        <div class="column is-half">
          <label class="label">Config</label>
          <codemirror ref="cmJson" v-model="config" :options="jsonOptions"></codemirror>
        </div>
      </div>
      <div class="control">
        <button v-on:click="postFeature" class="button is-success is-rounded">Run</button>
      </div>
    </section>
    <FeatureOutput v-if="result" :output="result" />
    <div v-bind:class="loading ? 'is-active loader-wrapper' : 'loader-wrapper'">
      <div class="loader is-loading"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FeatureOutput from "./FeatureOutput.vue";
// require styles
import "codemirror/lib/codemirror.css";

// language
import "codemirror/mode/gherkin/gherkin.js";
import "codemirror/mode/javascript/javascript.js";

// theme css
import "codemirror/theme/base16-light.css";
import "codemirror/theme/paraiso-light.css";

// require active-line.js
import "codemirror/addon/selection/active-line.js";

// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";

export default {
  name: "Feature",
  components: {
    FeatureOutput
  },
  data() {
    return {
      passed: false,
      loading: false,
      failure: undefined,
      error: "",
      result: "",
      feature: `Feature: testing FOAAS api.
  Background:
    * configure headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
    * url base_url
  Scenario: should say that this is awesome
    When method get
    Then status 200
    And match response.message == 'This is Fucking Awesome.'
    * print response`,
      featureOptions: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        theme: "base16-light",
        autofocus: true,
        mode: "text/x-feature",
        lint: { lintOnChange: false }
      },
      config: `{
 "base_url": "https://foaas.com//awesome/Karate"
}`,
      jsonOptions: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        theme: "base16-light",
        mode: "text/javascript"
      }
    };
  },
  methods: {
    postFeature() {
      this.loading = true;
      const body = {
        content: this.feature,
        config: JSON.parse(this.config)
      };
      axios
        .post(`${process.env.VUE_APP_KAAS_API_BASE}/feature`, body)
        .then(response => {
          this.error = undefined;
          const data = response.data;
          this.result = JSON.stringify(data, null, 2);
          const failedStep = data.elements
            .flatMap(o => o.steps)
            .find(v => v.result.status == "failed");
          if (failedStep) {
            this.passed = false;
            this.failure = failedStep;
          } else {
            this.passed = true;
            this.failure = undefined;
          }
          this.loading = false;
        })
        .catch(e => {
          this.passed = false;
          this.failure = undefined;
          this.error = e;
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.CodeMirror {
  height: auto;
}

.loader-wrapper.is-active {
  opacity: 1;
  z-index: 1;
}
.loader-wrapper.loader {
  height: 80px;
  width: 80px;
}
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
</style>