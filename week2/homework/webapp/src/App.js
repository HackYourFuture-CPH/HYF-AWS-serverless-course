import Products from "./components/Products";
import Header from "./components/Header";
import useNotifications from "./hooks/useNotification";

function App() {
  const { notifications } = useNotifications();

  return (
    <div className="container">
      <Header />
      <h1 className="text-white">Good Green Groceries</h1>
      <Products />
    </div>
  );
}

export default App;
