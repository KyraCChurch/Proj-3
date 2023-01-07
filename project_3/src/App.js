import { useState, useEffect } from 'react'

export default function App(){
    const [cards, setCards] = useState([])
    const [completedCards, setCompletedCards] = useState([])
    const [newCard, setNewCard] = useState({
        title: '',
        completed: false
    })

    //createCards
    const createCard = async () => {
        const body = {...newCard}
        try {
            const response = await fetch('/api/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCard)
            })
            const createdCard = await response.json()
            const cardsCopy = [createdCard,...cards]
            setCards(cardsCopy)
            setNewCard({
                title: '',
                completed: false
            })
        } catch (error) {
            console.error(error)
        }
    }
    //deleteCards
    //moveToCart

    return(<>
        <input type="text" value={newCard.title} onChange={() => {
            setNewCard({...newCard, title: e.target.value})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createCard()
        }}
        />
    </>)
}