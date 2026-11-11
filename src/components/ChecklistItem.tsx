import type { ChecklistItem as Task } from "../types/checklist";

type ChecklistItemProps = {
    item: Task
};

function ChecklistItem({ item }: ChecklistItemProps) {
    return <li>
        <input type="checkbox" checked={item.done} />
        <span>{item.text}</span>
    </li>
}

export default ChecklistItem;