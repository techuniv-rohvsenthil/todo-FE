import { useState, useEffect } from 'react';
import axios from 'axios';

const useInput = (defaultValue) => {
  const [todo, setTodo] = useState(defaultValue);
  useEffect(() => {
    const someFunc = async () => {
      const response = await axios.get('http://localhost:8080/notes');
      setTodo(response.data);
    };
    someFunc();
  }, []);
  return [todo, setTodo];
};
export default useInput;
