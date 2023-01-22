let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
   
    stageEl.textContent = fighters[figtherGenerator()]  + " " + "VS" + " " + fighters[figtherGenerator()]
   
    
})

function figtherGenerator() {
     let fighter = Math.floor(Math.random() * fighters.length)
     return fighter
}