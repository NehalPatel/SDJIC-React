import { useReducer, useState } from "react";

const addToCart = (state, action) => {
    switch (action.type) {
        case "increment":
            if (state >= 10)
                state = 10;
            else
                state = state + 1;
            break;
        case "decrement":
            if (state <= 1)
                state = 1
            else
                state = state - 1;
            break;
        default:
            state = 1;
            break;
    }

    return state;
}

function UseReducerDemo1() {

    const price = 100;
    const [qty, dispatch] = useReducer(addToCart, 1);
    const [total, setTotal] = useState(100);

    const changeQty = (operation) => {
        dispatch({ type: operation })

        setTotal(qty * price);
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item 1</td>
                        <td>100</td>
                        <td>
                            <button onClick={() => changeQty("decrement")}>-</button>
                            &nbsp; {qty} &nbsp;
                            <button onClick={() => changeQty("increment")}>+</button>
                        </td>
                        <td>{total}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" align="right"><b>Grand Total:</b></td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default UseReducerDemo1;