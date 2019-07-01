import fs from "fs";
import findUp from "findup-sync";
import toml from "toml";

export const getHammerConfig = () => {
  const configPath = findUp("hammer.toml");
  if (!configPath) {
    console.error("Could not find your `hammer.toml` file");
    // warning
    return undefined;
  }

  try {
    return toml.parse(fs.readFileSync(configPath));
  } catch (e) {
    console.error(`Could not parse "${configPath}"`);
    return undefined;
  }
};
