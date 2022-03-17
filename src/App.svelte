<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  //tabs
  let items = ["Current Polls", "Add New Polls"];
  let activeItem = "Current Polls";

  const tabChange = (e) => {
    activeItem = e.detail;
  };
  //polls

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs items="{items}" activeItem="{activeItem}" on:tabChange="{tabChange}" />
  {#if activeItem === "Current Polls"}
    <!-- NOTE:{polls}に省略することができる。がフォーマッターで省略できないようにしている -->
    <PollList />
  {:else if activeItem === "Add New Polls"}
    <CreatePollForm on:add="{handleAdd}" />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
