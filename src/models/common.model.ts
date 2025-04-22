class CommonModel{
    id:string
    name:string
    constructor(id:string,
        name:string){
            this.id=id,
            this.name=name
            
    }
    static initial(){
        return {
            id:'',
            name:'',
            
        }
    }
}
export {CommonModel}