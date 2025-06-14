import { useState } from "react";

interface ListGroupProps {
    states: string[];
    heading?: string;
    onSelectState: (state: string) => void;
}

function ListGroup(prop: ListGroupProps) {
    const { states, heading, onSelectState } = prop;
    // const states = ['Maryland', 'Virginia', 'Carlifornia', 'Washington', 'Georgia', 'Florida', 'New York', 'Texas', 'Illinois', 'Ohio'];
    const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
        <h1>{heading}</h1>
        {/* <h1>US States</h1> */}
        <ul className="list-group">
            {states.map((city, index) => 
                <li 
                className={
                    activeIndex === index ? 'list-group-item active' : 'list-group-item'
                } 
                key={index}
                onClick={() =>{
                        setActiveIndex(index)
                        onSelectState(city)
                    }
                }
                style={{cursor: 'pointer'}}>
                    {city} 
                </li>
            )}
        </ul>
    </>
  );
}

export default ListGroup;