export const ACTION = {
    CLEAR: "CLEAR",
    DEL: "DEL",
    INC: "INC",
    DEC: "DEC",
    SET: "SET",
    NOTHING: "NOTHING"
}
export default function reducer(state, action) {
    switch (action.type) {
        case ACTION.SET: {
            return {
                loading: false,
                length: action.val.length,
                val: action.val
            };
        }
        case ACTION.INC: {
            const ar = state.val.map(item => {
                if (item.id !== action.id)
                    return item;
                else {
                    item.amount += 1;
                    return item;
                }
            });
            return {
                loading: false,
                length: ar.length,
                val: ar
            };
        }
        case ACTION.DEC: {
            const ar = state.val.map(item => {
                if (item.id !== action.id)
                    return item;
                else {
                    item.amount -= 1;
                    if (item.amount !== 0) return item;
                }
            }).filter(item => item !== undefined);
            return {
                loading: false,
                length: ar.length,
                val: ar
            };
        }
        case ACTION.DEL: {
            const ar = state.val
                .filter(item => item.id !== action.id);
            return {
                loading: false,
                length: ar.length,
                val: ar
            };
        }
        case ACTION.CLEAR: {
            return {
                loading: false,
                length: 0,
                val: []
            };
        }
    }
}