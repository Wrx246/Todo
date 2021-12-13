import React from "react";
import styles from './App.module.css';
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import TodoList from "./Components/TodoList/TodoList";
import Footer from "./Components/Footer/Footer";

const App = () => (
    <div className={styles.app_wrapper}>
        <Header/>
        <Input/>
        <TodoList/>
        <Footer/>
    </div>
);

export default App;
