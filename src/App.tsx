import { Header } from './components/Header';
import { Item } from './components/Item';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css'
import './global.css'

export function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Item />
                <button type='submit'> 
                    Criar 
                    <PlusCircle size={20}/>
                </button>
            </div>
        </div>
    );
}