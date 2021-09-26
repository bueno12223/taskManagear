const API_URL = "http://192.168.1.104:3000/task"

export const getTasks = async () => {
    const res = await fetch(API_URL, {
      method: "GET",
    });
    console.log(res)
    return await res.json();
  };

export const deleteTask = async (id: String) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  };
  
  export const saveTask = async (newTask: any) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await res.json();
  };
  
  export const getTask = async (taskId: string) => {
    const res = await fetch(`${API_URL}/${taskId}`);
    return await res.json();
  };
  
  export const updateTask = async (taskId: any, newTask: any) => {
    console.log(taskId, newTask)
    const res = await fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return res;
  };