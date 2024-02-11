import { type FC, useState } from 'react';
import { Button } from '@/components/atoms';

export const HomeTemplate: FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleClick}>+1</Button>
        </div>
    );
};
