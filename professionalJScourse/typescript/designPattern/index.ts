import Singleton from "./designPattern/Singleton";

const singletonInstanceA: any = Singleton.getInstance();
const singletonInstanceB: any = Singleton.getInstance();

console.log(`Instance A and B are equal? ${singletonInstanceA === singletonInstanceB}`);
