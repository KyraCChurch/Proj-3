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
        <div className={styles.cardlist}>
            Add New Card:<input 
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
             <h3>All Cards</h3>
        {cards.map(card => (
            <Card 
                key={card._id} 
                card={card}
                buttonAction={moveToPresent}
                buttonText={'Arrived'}
            />
        ))}
        <h3>Present Cards</h3>
        {presentCards.map(card =>(
            <Card
                key={card._id}
                card={card}
                buttonAction={moveToCards}
                buttonText={'Left'}
            />
        ))}
        </div>
    )
}