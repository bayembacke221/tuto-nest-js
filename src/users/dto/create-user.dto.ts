import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Veuillez saisir une chaine de caracteres pour le nom' })
  @IsNotEmpty({ message: 'Le nom est requis' })
  @MinLength(3, { message: 'Le nom doit comporter au moins 3 caracteres' })
  @MaxLength(50, { message: 'Le nom doit comporter au maximum 50 caracteres' })
  name: string;
  @IsEmail({}, { message: "L'adresse email doit être valide" })
  @IsNotEmpty({ message: "L'email est requis" })
  email: string;
  @IsOptional()
  @IsEnum(['admin', 'user'], {
    message: 'Le role est different de ceux autorisés',
  })
  role?: 'admin' | 'user';
}
