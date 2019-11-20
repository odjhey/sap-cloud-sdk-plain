import express from "express";
import { helloWorld } from "./hello-world-route";
import { indexRoute } from "./index-route";
import { businessPartners } from "./business-partner-route";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get("/", indexRoute);
    router.get("/hello", helloWorld);
    router.get("/business-partners", businessPartners);
    this.app.use("/", router);
  }
}

export default new App().app;
