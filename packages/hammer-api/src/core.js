import fs from "fs";
import path from "path";
import findUp from "findup-sync";
import toml from "toml";

const HAMMER_CONFIG_FILE = "hammer.toml";

export const getHammerConfigPath = () => findUp(HAMMER_CONFIG_FILE);

export const getHammerBaseDir = () => {
  const configPath = getHammerConfigPath();
  if (!configPath) {
    return undefined;
  }
  return path.dirname(configPath);
};

// TODO: Resolve paths.
// TODO: Validate configuration.
export const getHammerConfig = () => {
  const configPath = getHammerConfigPath();
  if (!configPath) {
    console.error(`Could not find your ${HAMMER_CONFIG_FILE} file`);
    return undefined;
  }

  try {
    const config = toml.parse(fs.readFileSync(configPath));
    return { baseDir: getHammerBaseDir(), ...config };
  } catch (e) {
    console.error(`Could not parse "${configPath}", ${e}`);
    return undefined;
  }
};
