import { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();

const useInput = (defaultValue) => {
  const [todo, setTodo] = useState(defaultValue);
  const [listLoadComplete, setListLoadComplete] = useState(null);
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/notes`);
        setTodo(response.data);
        setListLoadComplete(true);
      } catch (err) {
        setListLoadComplete(false);
      }
    };
    someFunc();
  }, []);
  return [todo, setTodo, listLoadComplete];
};
export default useInput;
