import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    const handleAddCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleDecreaseCount = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
        }
        else
        return

    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleAddCount}>Add count</button>
            <button onClick={handleDecreaseCount}>Decrease Count</button>
        </div>
    );
};

export default Count;