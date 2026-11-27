import { useState, type SubmitEvent } from 'react';

type NewChecklistFormProps = {
    onAdd: (title: string) => void;
};

function NewChecklistForm({ onAdd }: NewChecklistFormProps) {
    const [title, setTitle] = useState('');

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const text = title.trim();

        if (text === '') {
            return;
        }

        onAdd(text);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nova lista"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default NewChecklistForm;
