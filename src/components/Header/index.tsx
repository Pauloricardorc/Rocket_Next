import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/ig_news.svg" alt="" />
            </div>
            <nav>
                <a>Home</a>
                <a>Posts</a>
            </nav>
        </header>
    )
}