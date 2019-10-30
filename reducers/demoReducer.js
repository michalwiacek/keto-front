import { SET_STRING } from '../actions/demoActions';

export default function settingString(state = '', action: Record<string, any>) {
    switch (action.type) {
        case SET_STRING:
            return action.theString;
        default:
            return state;
    }
}
