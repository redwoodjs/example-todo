import { getPhoton } from "../lib/photon";

export const findOrCreate = async ({ email }) => {
  const photon = await getPhoton();

  return await photon.users.upsert({
    where: { email },
    update: { email },
    create: { email }
  });
};
