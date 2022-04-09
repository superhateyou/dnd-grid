import React from "react";
import "./styles.css";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd";

export default function App() {
  const [items, setItems] = React.useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16
  ]);
  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <div className="App">
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={4}
          rowHeight={100}
          style={{ height: "400px" }}
        >
          {items.map(item => (
            <GridItem key={item} className="griditemUI">
              <div
                style={{
                  width: "100%",
                  height: "100%"
                }}
              >
                {item}
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </div>
  );
}
