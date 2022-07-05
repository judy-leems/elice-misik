import { createConnection } from "typeorm"
import {User, Restaurant, Like, Category, Menu, OwnerReview, Reserve, Time } from "./entities/index"
const main = async ()=>{
 try{
  const connection = await createConnection({
    type: "mysql",
    host: "34.64.150.160",
    port: 3306,
    username: "admin",
    password: '0000',
    database: 'matjip',
    synchronize: true,
    entities: [Like, Category, Menu, OwnerReview, Reserve, Restaurant, Time, User]
  })
  console.log("CONNECTED TO MYSQL")
 } catch (error){
  console.error(error);
  throw new Error("Unable to connect to mysql")
 }

}
main();