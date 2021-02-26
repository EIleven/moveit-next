import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/EIleven.png" alt="Breno" />
            <div>
                <strong>Breno César</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
    
}