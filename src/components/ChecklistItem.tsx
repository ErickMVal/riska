import type { ChecklistItem as Task } from '../types/checklist';

type ChecklistItemProps = {
    item: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};

function ChecklistItem({ item, onToggle, onDelete }: ChecklistItemProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.done}
                onChange={() => onToggle(item.id)}
            />
            <span>{item.text}</span>
            <button type="button" onClick={() => onDelete(item.id)}>
                Deletar
            </button>
        </li>
    );
}

export default ChecklistItem;
