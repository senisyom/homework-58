import ToolBar from "./components/ToolBar/ToolBar.tsx";
import DishForm from "./components/DishForm/DishForm.tsx";
import Cart from "./components/Cart/Cart.tsx";
import Dishes from "./components/Dishes/Dishes.tsx";
import { useState } from "react";
import { DishCart, IDish } from "./types";
import Modal from "./components/UI/Modal/Modal.tsx";
import AlertBlock from "./components/UI/Alert/AlertBlock.tsx";
import Alert from "./components/UI/Alert/Alert.tsx";

const App = () => {
  const [cart, setCart] = useState<DishCart[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: "1",
      name: "Plov",
      description: "taste",
      price: 200,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "2",
      name: "Pizza",
      description: "cheese",
      price: 500,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
    {
      id: "3",
      name: "Shaurma",
      description: "---",
      price: 250,
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/274px-Polu.jpg",
    },
  ]);

  const addNewDish = (newDish: IDish) => {
    setDishes((prevState) => [...prevState, newDish]);
  };

  const AddDishToCart = (dish: IDish) => {
    console.log(dish);
    setCart((prevState = []) => {
      const indexDish = prevState?.findIndex(
        (dishCart) => dishCart.dish === dish
      );
      if (indexDish === -1) {
        return [...prevState, { dish, amount: 1 }];
      } else {
        const cartCopy = [...prevState];
        const copyDishCart = { ...cartCopy[indexDish] };
        copyDishCart.amount++;
        cartCopy[indexDish] = copyDishCart;
        return [...cartCopy];
      }
    });
  };

  const closeModalWindow = () => {
    setShowModal(false);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const showAlertWindow = () => {
    setShowAlert(true);
  };

  console.log(cart);

  return (
    <>
      <Modal
        show={showModal}
        title="Some kinda modal title"
        closeModal={closeModalWindow}
      >
        <p>This is modal content</p>
      </Modal>

      <Alert show={showAlert} type="success" onDismiss={closeAlert}>
        This is a success type alert
      </Alert>

      <Alert show={showAlert}  type="warning">
        This is a warning type alert
      </Alert>

      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishForm addNewDish={addNewDish} />
          </div>
          <div className="col-4 mb-2">
            <Dishes dishes={dishes} addToCard={AddDishToCart} />
          </div>
          <div className="col-4 mb-2">
            <Cart cart={cart} />
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(!showModal)}
            >
              {" "}
              Order
            </button>

            <AlertBlock showAlertWindow={showAlertWindow} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
