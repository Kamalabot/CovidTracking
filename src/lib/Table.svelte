<script>
  export let states;
</script>

<style>
  table {
    width: 100%;
  }
  .section {
    padding: 0.5rem 1.5rem;
  }
</style>

<div class="section">
  <div class="container">
    <table class="collapse ba br2 b--black-10 pv2 ph3 mt4">
      <thead>
        <tr class="striped--near-white">
          <th class="pv2 ph3">State</th>
          <th class="pv2 ph3">Cases</th>
          <th class="pv2 ph3">Deaths</th>
          <th class="pv2 ph3">Total Tested</th>
        </tr>
      </thead>
      <tbody>
        {#each states as state (state.state)}
          <tr class="striped--near-white">
            <td class="pv2 ph3">
              <a rel="prefetch" href="/state/{state.state}" class="no-underline">{state.fullStateName}</a>
            </td>
            <td class="pv2 ph3">{state.cases}</td>
            <td class="pv2 ph3">{state.deaths}</td>
            <td class="pv2 ph3">{state.tested}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>