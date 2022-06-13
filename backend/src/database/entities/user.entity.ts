import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
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

 
    @Column("varchar",{
        name: "first_name"
    })
    firstName: string;

 
    @Column("varchar",{
        name: "last_name"
    })
    lastName: string;

 
    @Column("varchar",{
        name:"username",
        unique: true
    })
    username: string;

 
    @Column("varchar",{
        name: "password"
    })
    password: string;

    
    encryptPassword(){
        this.password = bcrypt.hashSync(this.password,8)
    }

    comparePassword(text: string){
        return bcrypt.compareSync(text,this.password)
    }
}