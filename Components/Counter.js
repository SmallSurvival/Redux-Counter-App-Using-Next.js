import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'
import { useEffect } from "react";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    return (

        <div>
            <div>
                <button variant="contained"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())

                    }
                >
                    Increase
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Dicrease
                </button>
            </div>
        </div>

    )

}
export default Counter
