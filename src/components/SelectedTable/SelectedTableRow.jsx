import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemPrice, removeSelectedItem } from '../../store/slices/selectedItemsSlice';

const SelectedTableRow = ({ item }) => {
    const dispatch = useDispatch();
    const { selectedLocations } = useSelector(state => state.market);

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.name}
            </td>
            {selectedLocations.map(loc => (
                <td key={`${item.id}-${loc}`} className="px-6 py-4 whitespace-nowrap">
                    <input
                        type="number"
                        value={item.prices[loc] || ''}
                        onChange={(e) => dispatch(updateItemPrice({
                            itemId: item.id,
                            location: loc,
                            price: e.target.value
                        }))}
                        className="w-24 text-sm rounded-md border-gray-300"
                    />
                </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                    onClick={() => dispatch(removeSelectedItem(item.id))}
                    className="text-red-600 hover:text-red-900"
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};