export const LOCATIONS = [
    "Fort Sterling",
    "Martlock",
    "Thetford",
    "Lymhurst",
    "Bridgewatch",
    "Caerleon"
];

export const API_CONFIG = {
    ITEMS: "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json",
    CHARTS: "https://europe.albion-online-data.com/api/v2/stats/Charts",
    HISTORY: "https://europe.albion-online-data.com/api/v2/stats/History"
};

export const STORAGE_KEYS = {
    SELECTED_ITEMS: 'albion_selected_items'
};

export const TABLE_COLUMNS = {
    MAIN: ['Name', 'Location', 'Price', 'Actions'],
    SELECTED: ['Name', 'Location', 'Buy Price', 'Sell Price', 'Profit', 'Actions']
};