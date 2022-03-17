<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  // import { onDestroy } from "svelte";
  // export let polls = [];
  // change data, refire callback functions
  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });
  // onDestroy(() => {
  // unsub from store
  //   unsub();
  // });
</script>

<div class="poll-list">
  <!-- NOTE:直接ループにストアのデータをインジェクトするので本来必要な上記のコードが不要になる -->
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails poll="{poll}" />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
