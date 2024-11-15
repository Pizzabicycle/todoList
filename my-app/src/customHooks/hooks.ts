import {TypedUseSelectorHook,  useSelector} from 'react-redux';
import  {RootState} from "@/store/store";

// export type AppDispatch = typeof store.dispatch;
// export const customDispatch: () => AppDispatch = useDispatch;

export const customUseSelector: TypedUseSelectorHook<RootState> = useSelector;