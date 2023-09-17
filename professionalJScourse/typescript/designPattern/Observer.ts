interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

export class StateManager implements Subject {
  watching: Observer[] = [];

  constructor(config: any) {
    const manager: HTMLInputElement = config;
    manager.addEventListener("keydown", (event): any => {
      if (event.key == "Enter") {
        this.notify(manager.value);
      }
    });
  }

  subscribe(observer: Observer) {
    this.watching.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.watching.findIndex((watcher) => {
      return watcher === observer;
    });

    this.watching.splice(index, 1);
  }

  notify(data: any) {
    this.watching.forEach((watcher): any => watcher.update(data));
  }
}

export class StateMember implements Observer {
  private member: HTMLElement;

  constructor(config: any) {
    this.member = config;
  }

  update(data: any) {
    this.member.innerHTML = data;
  }
}
