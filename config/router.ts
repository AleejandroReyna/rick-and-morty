import { Router as oakRouter } from "../depts.ts"

import {
    home as _home
} from '../handlers/pagesHandler.ts'
import {
    getInfo
} from '../handlers/apiHandler.ts'

const Router = new oakRouter
const ApiRouter = new oakRouter

ApiRouter
    .get("/info", getInfo)

Router
    .get("/", getInfo)
    .use('/api', ApiRouter.routes(), ApiRouter.allowedMethods())

export { Router }