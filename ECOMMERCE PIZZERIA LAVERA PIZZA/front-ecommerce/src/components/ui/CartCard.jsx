import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../redux/cartSlice';

const CartCard = ({ producto }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeCartItem(producto.id));
    };



    if (!producto) return null; 

    return (
        <div className="h-40 w-2/3 flex items-center justify-between border-b border-gray-400">
            <div className='w-1/3 flex justify-between gap-11'>
                <img src={producto.image} alt="" className="h-32 w-32 flex items-center justify-center" />
                <div className="h-1/3 flex flex-col justify-between space-y-4">
                    <div className="h-1/3 flex flex-col">
                        <h1 className="text-2xl font-bold text-start">{producto.name}</h1>
                        <p className="text-[12px] text-start">{producto.category}</p>
                    </div>
                    <button className="text-red-600 text-start" onClick={handleRemove} >Remove</button>
                </div>

            </div>

            <div className="h-4/5 w-1/6 flex flex-col">
                <p className="font-semibold text-2xl mb-6">$ {producto.price}</p>
                <div className="w-1/2 flex gap-3 rounded-xl border border-gray-400">
                    <button className="text-red-600 ml-2" onClick={() => setQuantity(quantity - 1)}>-</button>
                    <p className="font-bold">{quantity}</p>
                    <button className="text-green-600" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
