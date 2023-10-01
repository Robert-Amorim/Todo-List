import styles from './Title.module.css'

function Title(props) {
    const { children } = props;

    return (
        <h1 className={styles.title} >{children}</h1>
    )
}

export default Title;