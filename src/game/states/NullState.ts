import { AbstractState } from '/src/abstract/AbstractState';

export class NullState extends AbstractState {
  async activate() {}

  async deactivate() {}

  async update() {}
}
