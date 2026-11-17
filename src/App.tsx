import ChecklistItem from './components/ChecklistItem';
import type { ChecklistItem as Task } from './types/checklist';
import { useState, type SubmitEvent } from 'react';

function App() {
    const [itens, setItens] = useState<Task[]>([
        { id: '1', text: 'arrumar casa', done: true },
        { id: '2', text: 'arrumar quarto', done: true },
        { id: '3', text: 'arrumar cozinha', done: false },
    ]);

    const [inpText, setText] = useState('');

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

    function handleAdd() {
        if (inpText.trim() === '') {
            return;
        }

        const newItem: Task = {
            id: crypto.randomUUID(),
            text: inpText.trim(),
            done: false,
        };

        setItens([...itens, newItem]);
        setText('');
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        handleAdd();
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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Novo item"
                    value={inpText}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={handleAdd}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default App;
