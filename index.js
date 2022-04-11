document.getElementById("draw-a-card").addEventListener("click",()=>{
    drawCard()
})
async function createShuffledDeck(){
    const URL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const RESPONSE = await fetch(URL)
    return await RESPONSE.json()
}
 
async function drawCard(){
    let shuffleDeck = await createShuffledDeck()
    let deckId= shuffleDeck["deck_id"]
    const URL = `http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    const RESPONSE = await fetch(URL)
    const JSON = await RESPONSE.json()
    const card = JSON["cards"][0]
    const IMAGE = JSON["cards"][0]["image"]
   document.getElementById("card").src = IMAGE
}
drawCard()