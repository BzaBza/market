// services/api.service.js
const API_CONFIG = {
    ITEMS: "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json",
    CHARTS: "https://europe.albion-online-data.com/api/v2/stats/Charts",
    HISTORY: "https://europe.albion-online-data.com/api/v2/stats/History"
};

export const fetchMarketData = async (locations, dateFrom, dateTo) => {
    const params = new URLSearchParams({
        locations: locations.join(','),
        date: dateFrom,
        end_date: dateTo
    });

    const response = await fetch(`${API_CONFIG.CHARTS}?${params}`);
    if (!response.ok) throw new Error('Failed to fetch market data');
    return response.json();
};

export const fetchItems = async () => {
    const response = await fetch(API_CONFIG.ITEMS);
    if (!response.ok) throw new Error('Failed to fetch items');
    return response.json();
};

// services/storage.service.js
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