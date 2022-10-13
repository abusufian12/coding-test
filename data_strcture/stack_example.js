
let items = [];
let stack_top = 0;
let items_limit = 2;

function Main(){
    

    PushItem(5);
    PushItem(7);
    PushItem(3);
    PushItem(4);

    console.log(items, stack_top);
    console.log(PushItem(5));
    
    PopItem();
    console.log(PopItem());
    console.log(items, stack_top);


}

function PushItem(value){
    if (stack_top < items_limit) {
        items.push(value);
        stack_top = stack_top+1;
        return true;
    }else{
        return "Stack is Full\n";
    }
}

function PopItem(){
    if (stack_top == 0) {
        console.log("Stack is empty\n");
        return -1;
    }else{
        stack_top = stack_top-1;
        items.pop();
        return true;
    }
}

console.log(Main());