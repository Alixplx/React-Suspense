export interface User {
    
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
}
  
async function fetchUsers(): Promise<User[]> {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
  
    if (!response.ok) {

        throw new Error("Failed to fetch users.")
    }
  
    return response.json() as Promise<User[]>
}
  
// Create the Promise once and reuse it across renders.
export const usersPromise = fetchUsers();