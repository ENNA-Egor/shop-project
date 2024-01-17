import {BasketItem} from './BasketItem'

function BasketList (props){
    const {order =[], handleBasketShow = Function.prototype} = props;

    return  <ul className="collection basket-list">
    <li  className="collection-item  indigo lighten-2">Корзинa</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item} />
        )) :  <li className="collection-item indigo lighten-5">Корзина пуста</li>
    }
    <li className="collection-item  indigo lighten-2">Общая стомость</li>
    <i className='material-icons  basket-close' onClick={handleBasketShow}>close</i>
  </ul>
}

export {BasketList}