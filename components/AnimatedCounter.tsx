'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className="w-full">
            <CountUp
                end={amount}
                duration={1}
                separator=" "
                decimals={2}
                decimal=","
                suffix="₽"
            />
        </div>
    )
}

export default AnimatedCounter