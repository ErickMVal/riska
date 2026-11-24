export type ChecklistItem = {
    id: string;
    text: string;
    done: boolean;
};

export type Checklist = {
    id: string;
    title: string;
    items: ChecklistItem[];
    createdAt: number;
};
