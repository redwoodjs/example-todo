import fs from "fs";
import path from "path";
import findUp from "findup-sync";
import toml from "toml";

const HAMMER_CONFIG_FILE = "hammer.toml";

export const getHammerConfigPath = (): string | null =>
  findUp(HAMMER_CONFIG_FILE);

export const getHammerBaseDir = (
  configPath: string | null = getHammerConfigPath()
): string | null => {
  if (!configPath) {
    return null;
  }
  return path.dirname(configPath);
};

interface HammerConfig {
  web: {
    port: number;
  };
  api: {
    port: number;
    paths: {
      functions: string;
      graphql: string;
      generated: string;
    };
  };
}

// TODO: Resolve paths.
// TODO: Validate configuration.
export const getHammerConfig = (): HammerConfig | undefined => {
  const configPath = getHammerConfigPath();
  if (!configPath) {
    console.error(`Could not find your ${HAMMER_CONFIG_FILE} file`);
    return undefined;
  }

  try {
    const baseDir = getHammerBaseDir(configPath);
    const config = toml.parse(fs.readFileSync(configPath, "utf8"));
    return { baseDir, ...config };
  } catch (e) {
    console.error(`Could not parse "${configPath}", ${e}`);
    return undefined;
  }
};
