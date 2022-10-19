<script>
  export let cases;
  export let deaths;
  export let recovered;
  export let hospitalized;
  export let ventilator;
  export let icu;
  export let tested;
  export let updated;
</script>

<h1 class="blue">Covid Stat</h1>

<article class="pa1">
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Cases:</dd>
      <dd class="f3 f2-ns b ml0">{cases}</dd>
    </dl>
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Updated:</dd>
      <dd class="f3 f2-ns b ml0">{updated}</dd>
    </dl>
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Recovered:</dd>
      <dd class="f3 f2-ns b ml0">{recovered}</dd>
    </dl>
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Deaths:</dd>
      <dd class="f3 f2-ns b ml0">{deaths}</dd>
    </dl>
</article>
<article class="pa1">
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Tested:</dd>
      <dd class="f3 f2-ns b ml0">{tested}</dd>
    </dl>
    <dl class="dib mr5">
        <dd class="f6 f5-ns b ml0">Total Ventilator:</dd>
        <dd class="f3 f2-ns b ml0">{ventilator}</dd>
      </dl>
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Total ICU:</dd>
      <dd class="f3 f2-ns b ml0">{icu}</dd>
    </dl>
    <dl class="dib mr5">
      <dd class="f6 f5-ns b ml0">Hospitalized:</dd>
      <dd class="f3 f2-ns b ml0">{hospitalized}</dd>
    </dl>
</article>