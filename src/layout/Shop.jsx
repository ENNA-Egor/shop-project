import React, {useState, useEffect} from 'react';
import { Preloader } from '../components/Preloader';

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    return <main className='container content'>Shop</main>;
}


export {Shop};