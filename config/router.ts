import { Router as oakRouter } from "../depts.ts"

import {
    home
} from '../handlers/pagesHandler.ts'
import {
    getInfo
} from '../handlers/apiHandler.ts'

const Router = new oakRouter
const ApiRouter = new oakRouter

ApiRouter
    .get("/info", getInfo)

Router
    .get("/", home)
    .use('/api', ApiRouter.routes(), ApiRouter.allowedMethods())

export { Router }