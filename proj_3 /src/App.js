import { useState, useEffect } from 'react'
import CardList from './components/CardList/CardList'


export default function App(){
    const [cards, setCards] = useState([])
    const [completedCards, setCompletedCards] = useState([])
    const [newCard, setNewCard] = useState({
        title: '',
        present: false
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
                body: JSON.stringify(body)
            })
            const createdCard = await response.json()
            const cardsCopy = [createdCard,...cards]
            setCards(cardsCopy)
            setNewCard({
                title: '',
                present: false
            })
        } catch (error) {   
            console.error(error)
        }
    }
    //deleteCards
    const deleteCard = async (id) => {
        try {
            const index = completedCards.findIndex((card) => card._id === id)
            const completedCardsCopy = [...completedCards]
            const response = await fetch(`/api/cards/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            completedCardsCopy.splice(index, 1)
            setCompletedCards(completedCardsCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToCompleted
    const moveToCompleted = async (id) => {
        try {
            const index = cards.findIndex((card) => card._id === id)
            const cardsCopy = [...cards]
            const subject = cardsCopy[index]
            subject.present = true 
            const response = await fetch(`/api/cards/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedCard = await response.json()
            const completedTDsCopy = [updatedCard, ...completedCards]
            setCompletedCards(completedTDsCopy)
            cardsCopy.splice(index, 1)
            setCards(cardsCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //getCards
    const getCards = async () => {
        try{
            const response = await fetch('/api/cards')
            const foundCards = await response.json()
            setCards(foundCards.reverse())
            const responseTwo = await fetch('/api/cards/present')
            const foundCompletedCards = await responseTwo.json()
            setCompletedCards(foundCompletedCards.reverse())
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getCards()
    }, [])
    return(
        <>
            <CardList
            newCard={newCard}
            setNewCard={setNewCard}
            createCard={createCard}
            cards={cards}
            moveToCompleted={moveToCompleted}
            completedCards={completedCards}
            deleteCard={deleteCard}
            />
        </>
    )
}