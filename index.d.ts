declare module "gender-detection-from-name" {
  type Language = "en" | "it" | "es" | "fr" | "de" | "tr" | "";
  export function getGender(
    name: string,
    lang?: Language,
  ): "male" | "female" | "unknown";
}
