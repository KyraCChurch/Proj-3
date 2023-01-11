import styles from './CardList.module.scss'
import Card from '../Card/Card'

export default function CardList ({ 
    newCard, 
    createCard, 
    setNewCard, 
    cards,
    presentCards,
    moveToPresent,
    moveToCards
}){
    return(
        <>
            <h3>Add New Card:</h3><input
            className={styles.input}
            type="text" 
            value={newCard.ownersName} 
            onChange={(e) => {
                setNewCard({...newCard, ownersName: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createCard()
            }}
            />
        <h3>Present Cards</h3>
        {presentCards.map(card =>(
            <Card
                className={styles.presentCards}
                key={card._id}
                card={card}
                buttonAction={moveToCards}
                buttonText={'Left'}
            />
        ))}
        <h3>All Cards</h3>
        {cards.map(card => (
            <Card 
                className={styles.allCards}
                key={card._id} 
                card={card}
                buttonAction={moveToPresent}
                buttonText={'Arrived'}
            />
        ))}
    </>
    )
}