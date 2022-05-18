export default
    function createKeyboardListener (document) {
        const state = {
            observers: []
        }
            
        function subcribe (observerFunction) {
            state.observers.push(observerFunction)
        }
        function notifyAll(command) {
            console.log(`Notificando ${state.observers.length} Observers`)
            for (const observerFunction of state.observers) {
                observerFunction(command)
            }
        }

        document.addEventListener('keydown', handleKeydown)

        function handleKeydown(event) {
            const keyPressed = event.key
            console.log (keyPressed)
            
            const command = {
                playerId: 'player1', keyPressed
            }
            notifyAll(command)
        }
        return{
            subcribe
        }
    }