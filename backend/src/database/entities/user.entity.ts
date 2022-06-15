import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { IsNotEmpty,IsString,IsAlphanumeric, Length } from 'class-validator'
import bcrypt from 'bcrypt'

interface IUser{
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}


@Entity({
    name: "users"
})
export class User implements IUser{
    @PrimaryGeneratedColumn("uuid")
    id: string;

 
    @IsNotEmpty({
        message:"O primeiro nome do usuário é obrigatório!"
    })
    @Column("varchar",{
        name: "first_name"
    })
    firstName: string;
    
    
    @IsNotEmpty({
        message:"O apelido do usuário é obrigatório!"
    })
    @Column("varchar",{
        name: "last_name"
    })
    lastName: string;
    
    
    @IsNotEmpty({
        message:"O nome de usuário é obrigatório!"
    })
    @IsString({
        message:"O nome de usuário deve ser um texto!"
    })
    @IsAlphanumeric("pt-BR",{
        message:"O nome de usuário não pode conter espaço ou qualquer tipo de símbolo ou caractere estranho, apenas letras e números!"
    })
    @Column("varchar",{
        name:"username",
        unique: true
    })
    username: string;
    
    
    @IsNotEmpty({
        message:"A palavra-passe do usuário é obrigatória!"
    })

    @Column("varchar",{
        name: "password"
    })
    @Length(6,undefined,{
        message:"A palavra-passe deve ter no mínimo 6 caracteres!",
    })
    password: string;

    
    encryptPassword(){
        this.password = bcrypt.hashSync(this.password,8)
    }

    comparePassword(text: string){
        return bcrypt.compareSync(text,this.password)
    }
}