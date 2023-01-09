import styles from './CardList.module.scss'
import Card from '../Card/Card'

export default function CardList ({ 
    newCard, 
    createCard, 
    setNewCard, 
    cards,
    completedCards,
    moveToCompleted,
    deleteCard
}){
    return(
        <div className={styles.cardlist}>
            Add New Card:<input 
            className={styles.input}
            type="text" 
            value={newCard.title} 
            onChange={(e) => {
                setNewCard({...newCard, title: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createCard()
            }}
            />
             <h3>Cards</h3>
        {cards.map(card => (
            <Card 
                key={card._id} 
                card={card}
                buttonAction={moveToCompleted}
                buttonText={'Arrived'}
            />
        ))}
        <h3>Present Cards</h3>
        {completedCards.map(card =>(
            <Card
                key={card._id}
                card={card}
                buttonAction={deleteCard}
                buttonText={'Delete'}
            />
        ))}
        </div>
    )
}