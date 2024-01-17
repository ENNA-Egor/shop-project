import {BasketItem} from './BasketItem'

function BasketList (props){
    const {order} = props;

    return  <ul className="collection basket-list">
    <li  className="collection-item active">Корзинa</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item} />
        )) :  <li className="collection-item">Корзина пуста</li>
    }
    <li className="collection-item active">Общая стомость</li>
  </ul>
}

export {BasketList}