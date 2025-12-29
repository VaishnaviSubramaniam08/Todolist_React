import Todo from "../models/Todo.js";
export const getTodos=async(req,res)=>{
    const {userId}=req.query;
    const todos=await Todo.find({userId});
    res.json(todos);
    

};
export const createTodo=async(req,res)=>{
    const {userId,title,description}=req.body;
    const todo=new Todo({userId,title,description});
    res.json(await todo.save());
};
export const updateTodo=async(req,res)=>{
    const {id}=req.params;
    const {userId,title,description,completed}=req.body;
    const todo=await Todo.findById(id);
    todo.userId=userId;
    todo.title=title;
    todo.description=description;
    todo.completed=completed;
    res.json(await todo.save());
};
export const deleteTodo=async(req,res)=>{
    await Todo.deleteOne({_id:req.params.id});
    res.status(204).json();
}


