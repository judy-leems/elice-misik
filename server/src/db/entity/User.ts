import {BaseEntity, Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany} from "typeorm"
import { Reserve } from "./Reserve";
import { Restaurant } from "./Restaurant";

@Entity('User')
export class User extends BaseEntity{
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  nickName: string;

  @Column({
  })
  phoneNumber: string;

  @Column({nullable:true})
  role: string;

  @Column({ nullable:true
  })
  image: string

  @Column({type:'simple-array'})
  wishList:string[];

  @OneToOne(()=>Restaurant,restaurant=>restaurant.user)
  restaurant:Restaurant;

  @OneToMany(()=>Reserve,reserve=>reserve.user)
  reserves:Reserve[];
}