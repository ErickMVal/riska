import ChecklistCard from './components/ChecklistCard';
import ChecklistItem from './components/ChecklistItem';
import type { Checklist, ChecklistItem as Task } from './types/checklist';
import { useState, type SubmitEvent } from 'react';

function App() {
    const [checklists, setChecklists] = useState<Checklist[]>([
        {
            id: '1',
            title: 'Casa',
            items: [
                { id: '1', text: 'arrumar casa', done: true },
                { id: '2', text: 'arrumar quarto', done: true },
                { id: '3', text: 'arrumar cozinha', done: false },
            ],
            createdAt: Date.now(),
        },
    ]);
    // const [itens, setItens] = useState<Task[]>([
    //     { id: '1', text: 'arrumar casa', done: true },
    //     { id: '2', text: 'arrumar quarto', done: true },
    //     { id: '3', text: 'arrumar cozinha', done: false },
    // ]);

    // const [inpText, setText] = useState('');

    function handleToggle(checklistId: string, itemId: string) {
        setChecklists(
            checklists.map((checklist) => {
                if (checklist.id !== checklistId) {
                    return checklist;
                }

                return {
                    ...checklist,
                    items: checklist.items.map((item) => {
                        if (item.id === itemId) {
                            return { ...item, done: !item.done };
                        }

                        return item;
                    }),
                };
            }),
        );
    }

    // function handleDelete(id: string) {
    //     setItens(itens.filter((item) => item.id !== id));
    // }
    function handleDelete(checklistId: string, itemId: string) {
        setChecklists(
            checklists.map((checklist) => {
                if (checklist.id !== checklistId) {
                    return checklist;
                }

                return {
                    ...checklist,
                    items: checklist.items.filter((item) => item.id !== itemId),
                };
            }),
        );
    }

    // function handleAdd() {
    //     if (inpText.trim() === '') {
    //         return;
    //     }

    //     const newItem: Task = {
    //         id: crypto.randomUUID(),
    //         text: inpText.trim(),
    //         done: false,
    //     };

    //     setItens([...itens, newItem]);
    //     setText('');
    // }

    // function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     handleAdd();
    // }

    return (
        <div>
            {checklists.map((checklist) => (
                <ChecklistCard
                    key={checklist.id}
                    checklist={checklist}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
}

export default App;
