import styles from './Rules.module.css'

export function Rules() {
    function handleRulesClick() {
        
    }
    return <div className={styles.rulesBorder}>
        <button
            className={styles.rules}
            onClick={handleRulesClick}
        >
            RULES
        </button>
    </div>
}