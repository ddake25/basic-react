import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

//  npm install -g react-devtools  == to install react dev tools globally for easier debugging
function App() {
  const heading = 'US States';
  const states = ['Maryland', 'Virginia', 'Carlifornia', 'Washington', 'Georgia', 'Florida', 'New York', 'Texas', 'Illinois', 'Ohio'];
  const [alert, setAlert] = useState(false);
  const logState = (state: string) => {
    console.log(state);
  };
  const logButton = (color: string) => {
    console.log(color);
    setAlert(true);
  };
  const onCloseButton = () => {
    setAlert(false);
  };
  return (
    // <div> <Message /> </div>
    <div> 
      <Button color="success" buttonType="submit" handleClick={logButton} />
      <Button color="danger" buttonType="submit" handleClick={logButton} />
      <Button color="primary" buttonType="submit" handleClick={logButton} />
      <Button color="warning" buttonType="submit" handleClick={logButton} />
      <Button color="dark" buttonType="submit" handleClick={logButton} />
      {alert && <Alert closeButton={onCloseButton}><h2>TRAVEL & TOUR</h2></Alert>}
      <ListGroup heading={heading}  states={states} onSelectState={logState}/> 
    </div>
  );
}

export default App;