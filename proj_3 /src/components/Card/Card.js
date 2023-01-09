import styles from './Card.module.scss'

export default function Card({ card, buttonAction, buttonText }){
    return(
           <div className={styles.card}>{card.title} 
                    <button className={styles.button} onClick={() => buttonAction(card._id) }>{buttonText}</button>
            </div>
    )
}