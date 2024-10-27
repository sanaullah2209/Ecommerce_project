export{};


declare global{
    namespace Express{
  export interface Request{
                userId?:Number;
            cleanBody?:any;
            verifyToken?:any;
            role?:string;
            }
    }
}
