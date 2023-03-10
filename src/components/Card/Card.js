import styles from './Card.module.scss'

export default function Card({ card, buttonAction, buttonText }){
    return(
           <div className={styles.card}>{card.ownersName} 
                    <button className={styles.button} onClick={() => buttonAction(card._id) }>{buttonText}</button>
            </div>
    )
}