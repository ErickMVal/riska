import ChecklistItem from './components/ChecklistItem';
import type { ChecklistItem as Task } from './types/checklist';
import { useState } from 'react';

function App() {
    const [itens, setItens] = useState<Task[]>([
        { id: '1', text: 'arrumar casa', done: true },
        { id: '2', text: 'arrumar quarto', done: true },
        { id: '3', text: 'arrumar cozinha', done: false },
    ]);

    const [texto, setTexto] = useState('');

    function handleToggle(id: string) {
        setItens(
            itens.map((item) => {
                if (item.id === id) {
                    return { ...item, done: !item.done };
                }

                return item;
            }),
        );
    }

    function handleDelete(id: string) {
        setItens(itens.filter((item) => item.id !== id));
    }

    return (
        <div>
            <ul>
                {itens.map((item) => (
                    <ChecklistItem
                        key={item.id}
                        item={item}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <input
                type="text"
                placeholder="Novo item"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
        </div>
    );
}

export default App;