/*import Singleton from "./Singleton";*/

/*const singletonInstanceA: any = Singleton.getInstance();*/
/*const singletonInstanceB: any = Singleton.getInstance();*/

/*console.log(`Instance A and B are equal? ${singletonInstanceA === singletonInstanceB}`);*/

import { StateManager, StateMember } from "./Observer";
import * as Validation from "./Decorator"

const subscribe = document.querySelector("#subscribe");
const unsubscribe = document.querySelector("#unsubscribe");
const manager = new StateManager(document.querySelector("#state"));
const fanMember = new StateMember(document.querySelector("#lastUpdate"));
const casualMember = new StateMember(document.querySelector("#adjective"));

manager.subscribe(casualMember);
manager.subscribe(fanMember);

unsubscribe.addEventListener("click", (): any => {
  manager.unsubscribe(casualMember);
});

subscribe.addEventListener("click", (): any => {
  manager.subscribe(casualMember);
});



let field = new Validation.Field(document.querySelector("#state"));
field = Validation.SpaceFieldDecorator(field);
field = Validation.HastagFieldDecorator(field);
