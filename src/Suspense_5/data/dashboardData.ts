export interface User {
    
    id: number;
    name: string;
    email: string;
    username: string;
}
  
export interface Post {
    id: number;
    title: string;
    body: string;
}
  
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
  
async function fetchData<T>(url: string): Promise<T> {

    const response = await fetch(url);
  
    if (!response.ok) {
      
        throw new Error(`Request failed: ${response.status}`);
    }
  
    return response.json() as Promise<T>;
}
  
// Each request is created once and cached.
export const userPromise = fetchData<User>("https://jsonplaceholder.typicode.com/users/1")
  
export const postsPromise = fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts?userId=1")
  
export const todosPromise = fetchData<Todo[]>("https://jsonplaceholder.typicode.com/todos?userId=1")