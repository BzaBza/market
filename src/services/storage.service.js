const STORAGE_KEY = 'albion_selected_items';

export const loadSelectedItems = () => {
    try {
        const items = localStorage.getItem(STORAGE_KEY);
        return items ? JSON.parse(items) : null;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return null;
    }
};

export const saveSelectedItems = (items) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};