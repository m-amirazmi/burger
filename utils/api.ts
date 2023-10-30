const API_HOST = process.env.API_HOST;

export const api = (state: "client" | "server" = "server") => {
  let ROOT = API_HOST;
  if (state === "client") ROOT = "/api";

  return {
    burgers: ROOT + "/burgers",
  };
};
