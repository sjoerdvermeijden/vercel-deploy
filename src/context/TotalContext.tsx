import React, {
    useState,
    Dispatch,
    useEffect,
    SetStateAction,
    createContext,
} from "react";

type Props = {
    children: React.ReactNode;
};

type TotalContextProps = {
    total: number;
    setTotal: Dispatch<SetStateAction<number>>;
};

const TotalContextState = {
    total: 0,
    setTotal: () => { },
};

export const TotalContext = createContext<TotalContextProps>(TotalContextState);

export function TotalComponent({ children }: Props) {

    useEffect(() => {
        if (localStorage["cartTotal"]) {
            const cartTotal = JSON.parse(localStorage["cartTotal"]);
            setTotal(cartTotal);
        } else {
            setTotal(0);
        }
    }, [])

    const [total, setTotal] = useState<number>(0)

    return (
        <TotalContext.Provider value={{ total, setTotal }}>
            <>{children}</>
        </TotalContext.Provider>
    );
}

export default TotalComponent;