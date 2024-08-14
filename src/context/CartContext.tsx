import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
    useEffect,
} from "react";

type Props = {
    children: any;
};

interface CartItem {
    id: number;
    title: string;
    description: string,
    price: number,
    image: {
        img: string,
        alt: string,
    },
    count: number;
}

type ContextValue = [CartItem[], Dispatch<SetStateAction<CartItem[]>>];

export const CartContext = createContext<ContextValue>([[], () => { }]);

export function CartComponent({ children }: Props) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        if (localStorage["cartItems"]) {
            const cartItems = JSON.parse(localStorage["cartItems"]);

            setCartItems(cartItems);
        } else {
            setCartItems([]);
        }
    }, []);

    return (
        <>
            <CartContext.Provider value={[cartItems, setCartItems]}>
                {children}
            </CartContext.Provider>
        </>
    );
}

export default CartComponent;