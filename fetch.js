async function getTodo(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
        if (!response.ok){
      throw new Error("Failed to fetch todo.");
    }

    const todo = await response.json();
    console.log("Title:", todo.title);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getTodo();