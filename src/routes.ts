import { Router } from "express";

import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/createDelivery/CreateDeliveryController";
import { FindAllAvaliableController } from "./modules/deliveries/findAllAvaliable/findAllAvaliableController";
import { AcceptDeliveryController } from "./modules/deliveries/acceptDelivery/acceptDeliveryController";
import { FindMyDeliveriesController } from "./modules/clients/FindMyDeliveriesController";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AllDelivermanDeliveriesController } from "./modules/deliveryman/AllDelivermanDeliveriesController";
import { FinishDeliveryController } from "./modules/deliveries/finishDelivery/FinishDeliveryController";

export const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const deliveryController = new CreateDeliveryController();
const findAllAvaliableController = new FindAllAvaliableController();
const acceptDeliveryController = new AcceptDeliveryController();
const findMyDeliveriesController = new FindMyDeliveriesController();
const allDelivermanDeliveriesController =
  new AllDelivermanDeliveriesController();
const finishDeliveryController = new FinishDeliveryController();

routes.post("/client/auth/", authenticateClientController.handle);
routes.post("/deliveryman/auth/", authenticateDeliverymanController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/delivery/", ensureAuthenticateClient, deliveryController.handle);
routes.get(
  "/delivery/avaliable",
  ensureAuthenticateDeliveryman,
  findAllAvaliableController.handle
);
routes.put(
  "/delivery/acceptDelivery/:id",
  ensureAuthenticateDeliveryman,
  acceptDeliveryController.handle
);
routes.get(
  "/client/deliveries",
  ensureAuthenticateClient,
  findMyDeliveriesController.handle
);
routes.get(
  "/deliveryman/deliveries/",
  ensureAuthenticateDeliveryman,
  allDelivermanDeliveriesController.handle
);
routes.put("/delivery/finishDelivery/:id", ensureAuthenticateDeliveryman, finishDeliveryController.handle);
