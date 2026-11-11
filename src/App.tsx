import ChecklistItem from './components/ChecklistItem';
import type { ChecklistItem as Task } from "./types/checklist";
import { useState } from 'react';

function App() {
    const [itens, setItens] = useState<Task[]>([
  { id: '1', text: 'arrumar casa', done: true },
  { id: '2', text: 'arrumar quarto', done: true },
  { id: '3', text: 'arrumar cozinha', done: false },
]);
    
    return (
        <div>
            <ul>
                {itens.map((item) => (
                    <ChecklistItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default App;