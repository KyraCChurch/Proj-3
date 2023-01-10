import { useState, useEffect } from 'react'
import CardList from './components/CardList/CardList'


export default function App(){
    const [cards, setCards] = useState([])
    const [presentCards, setPresentCards] = useState([])
    const [newCard, setNewCard] = useState({
        ownersName: '',
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
                ownersName: '',
                present: false
            })
        } catch (error) {   
            console.error(error)
        }
    }
    //moveToCards
    const moveToCards = async (id) => {
        try {
            const index = presentCards.findIndex((card) => card._id === id)
            const presentCardsCopy = [...presentCards]
            const subject = presentCardsCopy[index]
            subject.present = false
            const response = await fetch(`/api/cards/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subject)
            })
            const updatedCd = await response.json()
            const presentCDsCopy = [updatedCd, ...cards]
            setPresentCards(presentCDsCopy)
            presentCardsCopy.splice(index, 1)
            setPresentCards(presentCardsCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //moveToPresent
    const moveToPresent = async (id) => {
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
            const presentTDsCopy = [updatedCard, ...presentCards]
            setPresentCards(presentTDsCopy)
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
            const foundPresentCards = await responseTwo.json()
            setPresentCards(foundPresentCards.reverse())
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
            moveToPresent={moveToPresent}
            presentCards={presentCards}
            moveToCards={moveToCards}
            />
        </>
    )
}