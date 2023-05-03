import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import USerStore from "./UserStore";
import ModalStore from "./modalStore";

interface Store{

    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore:  USerStore;
    modalStore: ModalStore;
}

export const store: Store = {

    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new USerStore(),
    modalStore: new ModalStore()

}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}