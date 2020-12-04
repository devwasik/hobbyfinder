import React, { Fragment, useState } from "react";

export default function Random() {
const [random, setRandom] = useState(Math.random())

const createValue = () => {
  setRandom(Math.random())
}
return(
  <p>value is: {random}<button onClick={() => createValue()}>Gen new</button></p>

);

}