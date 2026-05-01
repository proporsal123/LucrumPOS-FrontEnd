import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [showWorkspace, setShowWorkspace] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [holdOrders, setHoldOrders] = useState([])

    const addToCart = (product, quantity) => {
        if (!product || quantity < 1) return
        setCartItems((currentItems) => {
            const existingIndex = currentItems.findIndex(item => item._id === product._id)
            if (existingIndex !== -1) {
                return currentItems.map((item, idx) =>
                    idx === existingIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            }
            return [...currentItems, { ...product, quantity }]
        })
    }

    const removeFromCart = (productId) => {
        setCartItems((currentItems) => currentItems.filter(item => item._id !== productId))
    }

    const clearCart = () => setCartItems([])

    const addHoldOrder = (order) => {
        if (!order || order.items.length === 0) return
        setHoldOrders((current) => [...current, order])
    }

    const removeHoldOrder = (indexToRemove) => {
        setHoldOrders((current) => current.filter((_, index) => index !== indexToRemove))
    }

    const value = {
        showWorkspace,
        setShowWorkspace,
        showDetail,
        setShowDetail,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        holdOrders,
        addHoldOrder,
        removeHoldOrder
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider