export type todoArr = {
    text:string,
    isCompleted:boolean
  }

export type Props ={
  todo:todoArr, 
  index:number, 
  completed:(index:number)=>void, 
  remove:(index:number)=>void
}