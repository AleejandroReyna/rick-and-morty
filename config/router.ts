import { Router as oakRouter } from "../depts.ts"

import {
    home
} from '../handlers/pagesHandler.ts'

const Router = new oakRouter

Router
    .get("/", home)

export { Router }