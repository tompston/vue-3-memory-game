<script setup></script>

<template>
  <div class="flex-center">
    <div class="max-width-1">
      <div class="flex-column flex-center text-center">
        <div class="fs-1 fw-600 mt-50 mb-10">Hello!</div>
        <div class="text-1 op-80">
          <div>The following is a Memory game. A very good memory game.</div>
          <div>Select two cards with the same color & repeat untill there are no more cards.</div>

          <div class="mt-30 flex-center">
            <router-link
              to="/game"
              class="
                disable-text-select
                remove-decoration
                button-1
                py-2
                px-20
                transition-1
                start_the_game
              "
              >START THE GAME
            </router-link>
          </div>

          <div class="fs-4 fw-600 mt-90">About Us</div>
          <div class="text-3 max-w-800 op-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem maiores possimus
            quidem. Quos praesentium accusantium omnis aut blanditiis. Nulla ad eligendi voluptas
            minima nostrum fuga blanditiis, architecto quo odio.
          </div>
        </div>

        <br />
        <a href="https://github.com/tompston/vue-3-memory-game" target="_blank" rel="noopener noreferrer">
          <div class="border-1-3 flex-center p-10 border-rad-2 gh_box transition-1">
            <img src="/svg/github.svg" alt="github ico" class="h-60" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
