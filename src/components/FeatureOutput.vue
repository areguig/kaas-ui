<template>
  <section class="section is-size-6 monospace">
    <section v-for="scenario in scenarios" :key="scenario.line" class="accordions">
      <div class="message-header">
        <p>Scenario: {{ scenario.name}}</p>
      </div>

      <article v-for="step in scenario.steps" :key="step.line" class="accordion">
        <div class="accordion-header toggle" :class="step.result.status">
          <p>{{step.keyword+' '+step.name}}</p>
        </div>
        <div class="accordion-body">
          <div class="accordion-content" :class="step.result.status">
            <strong>{{step.result.status}} {{step.result.error_message ? step.result.error_message : step.doc_string}}</strong>
          </div>
        </div>
      </article>
    </section>
    <hr />
    <section class="section is-size-6">
      <div class="buttons has-addons is-right">
        <button class="button is-info" v-on:click="downloadOutput">Download cucumber json</button>
      </div>
      <pre> <code class="language-javascript">{{prettyOutput}}</code></pre>
    </section>
  </section>
</template>

<script>
import "highlight.js/styles/github.css";

import "bulma-accordion/dist/css/bulma-accordion.min.css";

import bulmaAccordion from "bulma-accordion/dist/js/bulma-accordion.min.js";

export default {
  name: "FeatureOutput",
  props: ["output"],
  mounted: function() {
    bulmaAccordion.attach();
  },
  computed: {
    scenarios() {
      return this.output.elements.filter(item => item.type == "scenario");
    },
    prettyOutput() {
      return JSON.stringify(this.output, null, 2);
    }
  },
  methods: {
    downloadOutput() {
      const blob = new Blob([JSON.stringify(this.output)], {
        type: "application/json"
      });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `output_${new Date().getTime()}`;
      link.click();
    }
  }
};
</script>

<style>
.accordions .accordion .accordion-header {
  font-family: monospace;
  background-color: #f5f5f5;
  color: #4a4a4a;
}
.monospace {
  font-family: monospace;
}

.accordions .accordion .passed {
  background-color: #effaf3;
  color: #257942;
}
.accordions .accordion .failed {
  background-color: #feecf0;
}

.accordions .message-header {
  background-color: #b5b5b5;
}
</style>