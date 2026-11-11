import type { ChecklistItem as Task } from "../types/checklist";

type ChecklistItemProps = {
    item: Task;
    onToggle: (id: string) => void;
};

function ChecklistItem({ item, onToggle }: ChecklistItemProps) {
    return <li>
        <input 
            type="checkbox" 
            checked={item.done}
            onChange={() => onToggle(item.id)} 
        />
        <span>{item.text}</span>
    </li>
}

export default ChecklistItem;