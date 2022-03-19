import { Request, Response } from "../depts.ts";

// Route for Home page 
export const home = ({ response }: { response : Response }) => {
    response.body = "Rick and Morty App"
    return response
};