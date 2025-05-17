import './banner.css';
import type {ReactNode} from "react";

interface BannerProps {
    value: number;
    des : string;
    children ?: ReactNode;
}

const Banner = ({ value,des ,children}: BannerProps) => {
   // const topic : string = 'Dinamic Value';

    return (
        <div className="banner">
            <h1>value is : {value}</h1>
            <h1> {des}</h1>
            {children}
        </div>
    );
};

export default Banner;