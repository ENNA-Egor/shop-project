import {BasketItem} from './BasketItem'

function BasketList (props){
    const {order} = props;

    return  <ul className="collection basket-list">
    <li  className="collection-item  indigo lighten-2">Корзинa</li>
    {
        order.length ? order.map(item => (
            <BasketItem key = {item.id} {...item} />
        )) :  <li className="collection-item indigo lighten-5">Корзина пуста</li>
    }
    <li className="collection-item  indigo lighten-2">Общая стомость</li>
  </ul>
}

export {BasketList}