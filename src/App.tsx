import type { ChecklistItem as Task } from "./types/checklist";
import ChecklistItem from './components/ChecklistItem'

function App() {
    const tarefa: Task = {
        id: '1', 
        text: "texto",
        done: true
    };
    
    return (
        <div>
            <ul>
                <ChecklistItem item={tarefa} />
            </ul>
        </div>
    );
}

export default App;