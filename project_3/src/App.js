import { useState, useEffect } from 'react'

export default function App(){
    const [cards, setCards] = useState([])
    const [completedCards, setCompletedCards] = useState([])
    const [newCard, setNewCard] = useState({
        dogName: '',
        present: false,
        owner1stName: '',
        owner2ndName: '',
        ownerNumber: '',
        vet: '',
        vetNumber: '',
        dogWeight: '',
        dogAge: '',
        dogBreed: '',
        feeding: '',
        vacRabbies: '',
        vacDistemper: '',
        vacBordatella: ''
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
                dogName: '',
                present: false,
                owner1stName: '',
                owner2ndName: '',
                ownerNumber: '',
                vet: '',
                vetNumber: '',
                dogWeight: '',
                dogAge: '',
                dogBreed: '',
                feeding: '',
                vacRabbies: '',
                vacDistemper: '',
                vacBordatella: ''
            })
        } catch (error) {
            console.error(error)
        }
    }
    //deleteCards
    //moveToPresent

    return(<>
        <input type="text" 
        value={newCard.title} 
        onChange={(e) => {
            setNewCard({...newCard, title: e.target.value})
        }} 
        onKeyDown={(e) => {
            e.key === 'Enter' && createCard()
        }}
        />
    </>)
}