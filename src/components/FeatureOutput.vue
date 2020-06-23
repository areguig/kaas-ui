<template>
  <section class="section is-size-7">
    <codemirror v-if="output" v-model="output" :options="resultOptions"></codemirror>
  </section>
</template>

<script>
import "codemirror/lib/codemirror.css";

import "codemirror/mode/javascript/javascript.js";

import "codemirror/theme/paraiso-light.css";

export default {
  name: "FeatureOutput",
  props: ["output"],
  data() {
    return {
      resultOptions: {
        height: "auto",
        readOnly: true,
        foldGutter: true,
        lineNumbers: true,
        theme: "paraiso-light",
        mode: "text/javascript"
      }
    };
  }
};
</script>

<style>
</style>