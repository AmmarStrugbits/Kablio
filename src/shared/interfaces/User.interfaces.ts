import { ISO31661Alpha2, ISO31661Alpha2ToCountryName } from "@/shared/enum/CountryCode.enum";
import { SocialMediaEmbeddable } from "@/shared/interfaces/SearchPreference.interfaces";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  socialMedia: SocialMediaEmbeddable;
  countryCode: ISO31661Alpha2;
}

export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  countryCode: ISO31661Alpha2ToCountryName;
  socialMedia?: SocialMediaEmbeddable;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserEmail {
  email: string;
}

export interface RecoveryDto {
  token: string;
  password: string;
}

