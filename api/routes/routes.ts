import { Router } from "https://deno.land/x/oak@v12.5.0/mod.ts";
import { auth, getUsers } from "../controllers/user-controller.ts";

const route = new Router();
route.get("/:id", getUsers);
route.get("/", getUsers);
route.post("/auth", auth);

export default route;
