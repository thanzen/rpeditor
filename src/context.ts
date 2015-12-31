import {Store} from 'redux';
class Context{
  private _store:Store;
  set store(value:Store){
    this._store = value;
  }
  get store(): Store{
    return this._store;
  }
};
var context = new Context();
export default context;
