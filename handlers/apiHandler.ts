import { Response } from "../depts.ts";

// Route for Home page 
export const getInfo = ({ response }: { response : Response }) => {
    response.status = 200
    response.body = {
        test: 'working'
    }
    return response
};