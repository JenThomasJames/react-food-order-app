import './App.css';
import { Fragment, useContext, useState } from 'react';
import Meals from './components/meals/Meals';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import CartContext from './store/cart-context';

const meals = [
  {
    id: 1,
    title: 'Polar White',
    price: 180,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
  },
  {
    id: 2,
    title: 'Holy Berry!',
    price: 120,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 3,
    title: 'Clone Wars',
    price: 150,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 4,
    title: 'Death by Chocolate',
    price: 220,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    title: 'Mint Fresh',
    price: 200,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 6,
    title: 'Cold Cold Heart',
    price: 150,
    quantity: 0,
    imageUrl: 'https://images.unsplash.com/photo-1556909044-5c0e1da96641?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

const App = () => {
  const ctx = useContext(CartContext);

  const onMealAdd = (id, quantity) => {
    if (quantity === 0)
      quantity = 1;
    let mealToAdd = getMealToAdd(id);
    mealToAdd.quantity = +quantity;
    ctx.addItemToCart(mealToAdd);
  }

  const getMealToAdd = (id) => {
    return meals[id - 1];
  }

  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  }

  const onHideModal = () => {
    setShowModal(false);
  }
  return (
    <Fragment>
      <Header onShowModal={onShowModal}></Header>
      {showModal && <Cart onShowModal={onShowModal} onHideModal={onHideModal} />}
      <Meals meals={meals} onMealAdd={onMealAdd}></Meals>
    </Fragment>
  );
}

export default App;
