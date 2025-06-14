import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

//  npm install -g react-devtools  == to install react dev tools globally for easier debugging
function App() {
  const heading = 'US States';
  const states = ['Maryland', 'Virginia', 'Carlifornia', 'Washington', 'Georgia', 'Florida', 'New York', 'Texas', 'Illinois', 'Ohio'];
  const logState = (state: string) => {
    console.log(state);
  };
  return (
    // <div> <Message /> </div>
    <div> 
      <Alert><h2>TRAVEL & TOUR</h2></Alert>
      <ListGroup heading={heading}  states={states} onSelectState={logState}/> 
    </div>
  );
}

export default App;