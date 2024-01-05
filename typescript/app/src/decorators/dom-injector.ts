export function domInjector(seletor: string) {
  return (target: any, propertyKey: string) => {
    let elemento: HTMLElement;

    // * Busca o elemento pelo seletor
    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
      }
      return elemento;
    };

    // * Cria a propriedade getter
    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}