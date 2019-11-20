import { Request, Response } from "express";
import { BusinessPartner } from "@sap/cloud-sdk-vdm-business-partner-service";

const businessPartners = async (req: Request, res: Response) => {
  getAllBusinessPartners()
    .then(businessPartners => res.status(200).send(businessPartners))
    .catch(e => res.status(500).send(e));
};

const getAllBusinessPartners = (): Promise<BusinessPartner[]> => {
  return BusinessPartner.requestBuilder()
    .getAll()
    .execute({
      destinationName: "MockServer"
    });
};

export { businessPartners };
