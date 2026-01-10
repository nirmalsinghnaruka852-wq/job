import { charactersComposition, emailValidator, minLength, noSpacesAllowed, required ,upperCase,validators} from "./index";

export const emailCheck = validators(
  required(),
  noSpacesAllowed("email"),
  emailValidator()
);

export const passwordCheck = validators(
  required(),
  minLength(8),
  noSpacesAllowed("password"),
  charactersComposition()
);

export const nameCheck = validators(
  required(),
  upperCase(),
  noSpacesAllowed("name")
);
