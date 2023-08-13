declare module "gender-detection-from-name" {
    export function getGender(name: string, lang?: 'en' | 'it' | 'es'| 'fr'): string;
}
