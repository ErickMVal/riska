import ChecklistItem from './components/ChecklistItem';
import type { ChecklistItem as Task } from "./types/checklist";
import { useState } from 'react';

function App() {
    const [itens, setItens] = useState<Task[]>([
        { id: '1', text: 'arrumar casa', done: true },
        { id: '2', text: 'arrumar quarto', done: true },
        { id: '3', text: 'arrumar cozinha', done: false },
    ]);

    function handleToggle(id: string) {
        setItens(
            itens.map((item) => {
                if (item.id === id) {
                    return {...item, done: !item.done}
                }    

                return item;
            })
        );
    }
    
    return (
        <div>
            <ul>
                {itens.map((item) => (
                    <ChecklistItem key={item.id} item={item} onToggle={handleToggle}/>
                ))}
            </ul>
        </div>
    );
}

export default App;