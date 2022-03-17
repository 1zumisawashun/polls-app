<script>
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
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
  <!-- NOTE:直接ループにストアのデータをインジェクトするので本来必要な上記のコードが不要になる(unsub含む) -->
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip="{{ duration: 500 }}">
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
