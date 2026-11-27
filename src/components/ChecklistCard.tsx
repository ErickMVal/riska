import { useState, type SubmitEvent } from 'react';
import type { Checklist } from '../types/checklist';
import ChecklistItem from './ChecklistItem';

type ChecklistCardProps = {
    checklist: Checklist;
    onToggle: (checklistId: string, itemId: string) => void;
    onDelete: (checklistId: string, itemId: string) => void;
    onAdd: (checklistId: string, text: string) => void;
};

function ChecklistCard({
    checklist,
    onToggle,
    onDelete,
    onAdd,
}: ChecklistCardProps) {
    const [inpText, setText] = useState('');

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const text = inpText.trim();

        if (text === '') {
            return;
        }

        onAdd(checklist.id, text);
        setText('');
    }

    return (
        <section>
            <h2>{checklist.title}</h2>
            <ul>
                {checklist.items.map((item) => (
                    <ChecklistItem
                        key={item.id}
                        item={item}
                        onToggle={(itemId) => onToggle(checklist.id, itemId)}
                        onDelete={(itemId) => onDelete(checklist.id, itemId)}
                    />
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Novo item"
                    value={inpText}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default ChecklistCard;
