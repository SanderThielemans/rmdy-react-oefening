interface CounterState {
    count: number;
}
interface CounterAction {
    type: string;
    payload: number;
}

export const counterReducer = (state: CounterState, action: CounterAction) => {
    const {type, payload } = action;

    switch (type) {
        case 'counter.add':
            let result = state.count + payload;
            result = result % 11 === 0 ? 0 : result;

            return {
                ...state,
                count: result,
            };

        case 'counter.set':
            return {
                ...state,
                count: payload,
            };

        default:
            return {
                ...state
            };
    }
}