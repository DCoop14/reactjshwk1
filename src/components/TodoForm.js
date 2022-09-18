import React from 'react'

export default function TodoForm() {
    const [todo, setTodo] = useStaate({
        id: "",
        task: "",
        completed: false    
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    
  
    return (
        <form>
          <input/>
          <button/>
        </form>
  );
}
