import "./App.css";
import Headder from "./components/headder/Headder";
import TodoCard from "./components/todo/Card";
import { Footer } from "./components/footer/Footer";
import { useState } from "react";

//================data base operations==============

// let template_data = [
//   { title: "complete this module" },
//   { title: "finish game level" },
//   { title: "make it simple" },
//   { title: "don't over think" },
// ];

//======================================
// sessionStorage.setItem("toDoList", JSON.stringify(template_data));

const TodoWrapper = ({ colors }) => {
  let cssStyle = {
    padding: "10px",
    background: colors.mid,
    color: colors.font,
    fontSize: "22px",
  };
  const [data, setData] = useState(getData());
  const [inputData, setInputData] = useState("");
  function deleteData(id) {
    let curr_data = JSON.parse(sessionStorage.getItem("toDoList"));
    let new_data = [];
    for (let i = 0; i < curr_data.length; i++) {
      if (curr_data[i].title === id) {
        continue;
      }
      new_data.push(curr_data[i]);
    }
    sessionStorage.setItem("toDoList", JSON.stringify(new_data));
    setData(new_data);
  }
  function getData() {
    let t = JSON.parse(sessionStorage.getItem("toDoList"));
    if (t == null) {
      return [];
    }
    return t;
  }
  function addData(parm) {
    //add data

    if (parm === "") {
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === parm) {
        return;
      }
    }
    let newdata = [...data, { title: parm }];
    setData(newdata);
    sessionStorage.setItem("toDoList", JSON.stringify(newdata));
  }
  return (
    <>
      {data &&
        data.map((data) => {
          return (
            <TodoCard data={data} colors={colors} deleteData={deleteData} />
          );
        })}
      <div
        style={{ display: "flex", width: "auto", margin: "auto", ...cssStyle }}
      >
        <input
          type="text"
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            addData(inputData);
          }}
        >
          Add TODO
        </button>
      </div>
    </>
  );
};
function App() {
  let light = {
    top: "#ECEE81",
    mid: "#8DDFCB",
    bottom: "#82A0D8",
    font: "#000000",
    contrast: "#EDB7ED",
  };
  let dark = {
    top: "#040D12",
    mid: "#183D3D",
    bottom: "#5C8374",
    font: "#ffffff",
    contrast: "#93B1A6",
  };
  const [colors, setColors] = useState(light);
  return (
    <>
      <Headder
        colors={colors}
        setColors={setColors}
        light={light}
        dark={dark}
      />
      <TodoWrapper colors={colors} />
      <Footer colors={colors} />
    </>
  );
}

export default App;
