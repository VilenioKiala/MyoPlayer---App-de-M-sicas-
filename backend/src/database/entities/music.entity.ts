import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

interface IMusic{
    id: string;
    cover: string;
    music: string;
    titulo: string;
    autor: User;
}


@Entity({
    name: "musics",
})
export class Music implements IMusic{
    @PrimaryGeneratedColumn("uuid")
    id: string;

 
    @IsNotEmpty({
        message: "O cover da música é obrigatória!"
    })
    @Column({
        type:"varchar",
    })
    cover: string;
    
 
    @IsNotEmpty({
        message: "A música é obrigatória!"
    })
    @Column({
        type:"varchar",
    })
    music: string;
    
 
    @IsNotEmpty({
        message: "O título da música é obrigatória!"
    })
    @Column({
        type:"varchar",
    })
    titulo: string;
 
 
    @IsNotEmpty({
        message: "O autor da música é obrigatória!"
    })
    @ManyToOne(()=> User,(user)=>user.id,{
        onDelete:"CASCADE"    
    })
    @JoinColumn({
        name:"autor"
    })
    autor: User;
}