import { Header } from './components/Header';
import { ItemBox } from './components/ItemBox';
import styles from './App.module.css'
import './global.css'

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <ItemBox />
                <button> 
                    Criar + 
                </button>
            </div>
        </div>
    );
}