export default
function createGame() { 
    const state = {
    players: {},
    fruits: {},
    screen:{ width: 30, height:30 }
    }
    function addPlayer (command) {
        const playerId = command.playerId
        const playerX = command.playerX
        const playerY = command.playerY

        state.players[playerId] = {
            x: playerX, y: playerY
        }
    }
    function removePlayer(command) {
        const playerId = command.playerId
        delete state.players[playerId]}
    
        function addFruit (command) {
        const fruitId = command.fruitId
        const fruitX = command.fruitX
        const fruitY = command.fruitY

        state.fruits[fruitId] = {
            x: fruitX, 
            y: fruitY}
        
}

    function removeFruit (command) {
        const fruitId = command.fruitId

        delete state.fruits[fruitId]
    }

    function movePlayer(command) { 

    
        const acceptedMoves = {
            ArrowUp(player) {
              
                if (keyPressed === 'ArrowUp' && player.y - 1 >= 0){
                player.y = player.y - 1 }
            },
            ArrowDown(player) {
              
                if (keyPressed === 'ArrowDown' && player.y + 1 < state.screen.height) {
                player.y = player.y + 1 }
            },
        
            ArrowRight(player) {
                
                if (keyPressed === 'ArrowRight' && player.x + 1 < state.screen.width ){
                player.x = player.x + 1 }
            },
    
            ArrowLeft(player) {
                
                if (keyPressed === 'ArrowLeft' && player.x - 1 >= 0){
                player.x = player.x - 1 }
            }
        
        }
       
       
       
      
        const keyPressed = command.keyPressed
        const playerId = command.playerId
        const player = state.players[playerId]
        const moveFunction = acceptedMoves[keyPressed]
        
        if (player && moveFunction) {
            moveFunction(player)
            checkForFruitCollision(playerId)
}

        return // Temp
    }
        function checkForFruitCollision(playerId) {
            const player = state.players[playerId]

                for (const fruitId in state.fruits) {
                    const fruit = state.fruits[fruitId]
                   
                if (player.x === fruit.x && player.y === fruit.y ) {
                    
                    
                    
                    
                    removeFruit({ fruitId: fruitId})
                    
                
                }    
                }
            }
// fechando creategame()

        return {
            addPlayer,
            removePlayer,
            movePlayer,
            addFruit,
            removeFruit,
            state
    }
}