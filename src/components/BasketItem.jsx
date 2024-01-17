function  BasketItem (props) {
    const {
            id,
            name,
            price,
            quantity,
            removeFromBasket = Function.prototype,
    } = props;
        return (
        <li className="collection-item ">
            {name} x {quantity} = {price * quantity} 
            <span  className="secondary-content close-item" onClick={() => removeFromBasket(id)}>
                <i className="material-icons icons-color" >close</i></span>
            </li>
            );
}

export {BasketItem}