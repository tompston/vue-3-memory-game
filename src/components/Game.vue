<script setup>
import { ref, onMounted } from 'vue'
import { cardData } from '../utils/data.js'
import fakePause, { shuffleArray } from '../utils/utils.js'

// variables for state
const cards = ref(cardData)
const currentlySelectedCardCount = ref(0)
const currentlySelectedCardPair = ref([])
const canSelectMoreCards = ref(true) // while the array of currentlySelectedCardPair has 2 values, this is set to false
const numberOfMovesMade = ref(0)
const pauseTime = 600

function switchCardState(card) {
  // this won't allow selection of the same card, meaning you can't select the same card
  // twice to cheat the CheckIfCardsMatch() function
  if (card.isShown) {
    console.log('card is already selected!')
  } else {
    // if the currentlySelectedCardPair already has 2 values, you can't select
    // any more cards
    if (canSelectMoreCards.value) {
      // if card.isShown boolean is set to true, then the element with the bindend style value
      // will be shown
      card.isShown = true

      // increment the amount of moves made each time you click on the card (when it's allowed)
      numberOfMovesMade.value += 1

      // while the array that holds the pair of cards does not have the 2 cards that will be
      // compared, you can append the passed cards to it
      if (currentlySelectedCardCount.value < 2) {
        currentlySelectedCardPair.value.push(card)
        currentlySelectedCardCount.value += 1
      }

      // if exactly 2 cards are selected, run the function that checks if their values match
      // note that while this func is running, selection of other cards is disabled.
      if (currentlySelectedCardCount.value == 2) {
        // console.log('exactly 2 cards are selected!')
        CheckIfCardsMatch()
      }
    }
  }
}

async function CheckIfCardsMatch() {
  // disable the selection of new cards, while the cards in the array are compared
  canSelectMoreCards.value = false

  // assign each individual card to be a variable.
  let first_card = currentlySelectedCardPair.value[0]
  let second_card = currentlySelectedCardPair.value[1]

  // if the value of both of the objects stored inside the matches
  if (first_card.value == second_card.value) {
    const pause = await fakePause(pauseTime)
    resetCurrentCards()
    // console.log('Both cards match!')

    // delete the card by filtering the array
    cards.value = cards.value.filter(function (card) {
      return card.id !== first_card.id && card.id !== second_card.id
    })
  } else {
    const pause = await fakePause(pauseTime)
    // console.log('Cards do not match!')
    resetCurrentCards()
  }
}

// reset both the array that holds cards to be empty + the variable that was used as a
// counter to check how many values were in array.
// Also reset the cards to be not shown ( aka hide the bg color of it )
async function resetCurrentCards() {
  currentlySelectedCardPair.value = []
  currentlySelectedCardCount.value = 0
  cards.value.forEach((card) => {
    card.isShown = false
  })
  canSelectMoreCards.value = true
}

function resetGame() {
  numberOfMovesMade.value = 0
  cards.value = cardData
  shuffleArray(cards.value)
}

// on the initial load of the component, shuffle the array
onMounted(() => {
  shuffleArray(cards.value)
})
</script>

<template>
  <div class="flex-center">
    <div class="max-width-1">
      <div class="mt-50"></div>

      <!-- grid of cards -->
      <div class="grid gap-20 card_grid">
        <div v-for="card in cards" v-bind:key="card.id">
          <div class="disable-text-select flex-center" @click="switchCardState(card)">
            <div v-if="card.isShown == false" class="single_card op-50">?</div>
            <div
              v-if="card.isShown == true"
              class="single_card text-col-3 transition-1"
              :style="{ background: card.value }"
            >
              {{ card.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- Once the cards array is empty, you won the game. So show this. -->
      <div v-if="cards.length == 0">
        <div class="flex-column flex-center">
          <div class="fs-3 fw-600 pt-50">Congrats. You did it. Yay.</div>
          <div class="fs-6 fw-300 pt-20 text-center">
            You needed {{ numberOfMovesMade }} moves to win the game.
          </div>
          <div class="fs-6 fw-300 pt-8">Not great, not terrible.</div>

          <div class="mt-20">
            <button class="button-1 button-success" @click="resetGame()">PLAY AGAIN</button>
          </div>
        </div>
      </div>

      <!-- <div class="mt-90"></div>
      currentlySelectedCardPair: {{ currentlySelectedCardPair }}
      <div class="mt-30"></div>
      currentlySelectedCardPair.length {{ currentlySelectedCardPair.length }}
      <div class="mt-30"></div>
      canSelectMoreCards: {{ canSelectMoreCards }} -->
    </div>
  </div>
</template>
