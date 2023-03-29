import React, {useEffect, useState} from "react";
import "./Trafic.css";
import * as API from "../../api/api"

const Trafic = () => {
    const [trafic, setTrafic] = useState([]);
    useEffect(() => {
        const data = async () => {
            const data = await API.GetTraffic();
            setTrafic(data);
            console.log(data);
        }
        data();
    }, []);

    return (
        <div>
        <h1>{trafic}</h1> 
        </div>
    );
};

export default Trafic;

