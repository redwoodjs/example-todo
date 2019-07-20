import Photon from "@generated/photon";

let PHOTON_INSTANCE;

export const getPhoton = async () => {
  if (PHOTON_INSTANCE) {
    return PHOTON_INSTANCE;
  }

  PHOTON_INSTANCE = new Photon();
  await photon.connect();
  PHOTON_INSTANCE = photon;
  return PHOTON_INSTANCE;
};
