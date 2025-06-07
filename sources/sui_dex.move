module sui_dex::example;

use std::string::String;


public struct TodoList has key, store {
    id: UID,
    items: vector<String>,
}

public fun new(ctx: &mut TxContext): TodoList {
    let id = object::new(ctx);
    let list = TodoList {
        id,
        items: vector[],
    };
    (list)
}

public fun add (list: &mut TodoList, item: String) {
    vector::push_back(&mut list.items, item);
}

public fun remove(list:&mut TodoList, index: u64): String{
    list.items.remove(index)
}

public fun delete(list: TodoList){
    let TodoList { id, items: _ } = list;
    id.delete();
}

public fun length(list: &TodoList): u64 {
   list.items.length() as u64
}
