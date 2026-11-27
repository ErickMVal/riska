import ChecklistCard from './components/ChecklistCard';
import ChecklistItem from './components/ChecklistItem';
import NewChecklistForm from './components/NewChecklistForm';
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
        {
            id: '2',
            title: 'Mercado',
            items: [
                { id: '1', text: 'Comprar banana', done: true },
                { id: '2', text: 'Comprar leite', done: true },
                { id: '3', text: 'Comprar ovos', done: false },
            ],
            createdAt: Date.now(),
        },
    ]);

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

    function handleAdd(checklistId: string, text: string) {
        const newItem: Task = {
            id: crypto.randomUUID(),
            text: text,
            done: false,
        };

        setChecklists(
            checklists.map((checklist) => {
                if (checklist.id !== checklistId) {
                    return checklist;
                }

                return {
                    ...checklist,
                    items: [...checklist.items, newItem],
                };
            }),
        );
    }

    function handleAddChecklist(title: string) {
        const newChecklist: Checklist = {
            id: crypto.randomUUID(),
            title: title,
            items: [],
            createdAt: Date.now(),
        };

        setChecklists([...checklists, newChecklist]);
    }

    return (
        <div>
            <NewChecklistForm onAdd={handleAddChecklist} />
            {checklists.map((checklist) => (
                <ChecklistCard
                    key={checklist.id}
                    checklist={checklist}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
                    onAdd={handleAdd}
                />
            ))}
        </div>
    );
}

export default App;
