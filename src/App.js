import Stepper from './components/Stepper';
import './App.css';

const CheckOutSteps = [
  {
    name: "Customer Info",
    Component: () => <div>Provide Your Contact details.</div>,
  },
  {
    name: "Shipping Address",
    Component: () => <div>Enter Your Shipping Address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete For Your Order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your Order has been delivered.</div>,
  },
];

function App() {
  return (
    <div className='head'>
      <h1>Checkout Stepper</h1>
      <Stepper StepsConfig= {CheckOutSteps} />
    </div>
  );
}

export default App;
