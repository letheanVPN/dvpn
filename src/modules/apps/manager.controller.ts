import { Context, Router } from "../../../deps.ts";
import { AppManager } from "./manager.service.ts";

const AppManagerRouter = new Router();
const apps = new AppManager();

AppManagerRouter.get("/apps/list", async (context: Context) => {
  try {
    context.response.status = 200;
    context.response.body = apps.getConfig();
  } catch (e) {
    context.response.status = 404;
    context.response.body = "Not Found";
  }
});

AppManagerRouter.get("/apps/marketplace", async (context: Context) => {
  try {
    context.response.status = 200;
    context.response.body = await apps.getMarketPlaceApps();
  } catch (e) {
    context.response.status = 404;
    context.response.body = "Not Found";
  }
});

AppManagerRouter.post("/apps/install", async (context: Context) => {
  try {
      const body = context.request.body({ type: "json" });
      const req = await body.value;

    context.response.status = 200;
    context.response.body = apps.installApp(req.name);
  } catch (e) {
    console.log(e)
    context.response.status = 404;
    context.response.body = "Not Found";
  }
});
AppManagerRouter.post("/apps/remove", async (context: Context) => {
  try {
      const body = context.request.body({ type: "json" });
      const req = await body.value;

    context.response.status = 200;
    apps.getConfig()
    apps.removeApp(req.name);
    context.response.body = true
  } catch (e) {
    console.log(e)
    context.response.status = 404;
    context.response.body = "Not Found";
  }
});

export  {AppManagerRouter}