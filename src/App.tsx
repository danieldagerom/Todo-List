import { Header } from './components/Header';
import { Item } from './components/Item';
import styles from './App.module.css'
import './global.css'

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Item />
            </div>
        </div>
    );
}