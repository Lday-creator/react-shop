export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };

        case 'INC_QUANTITY': {
            const newOrder = state.order.map((orderItem) => {
                if (orderItem.id === payload.id) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            return {
                ...state,
                order: newOrder,
            };
        }

        case 'DEC_QUANTITY': {
            const newOrder = state.order.map((orderItem) => {
                if (orderItem.id === payload.id) {
                    if (orderItem.quantity === 1) {
                        return orderItem;
                    } else {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity - 1,
                        };
                    }
                } else {
                    return orderItem;
                }
            });

            return {
                ...state,
                order: newOrder,
            };
        }

        case 'ADD_TO_CART': {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === payload.itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };

        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };

        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };

        default:
            return state;
    }
}
