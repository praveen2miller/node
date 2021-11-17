import express,{Application,Request,Response,NextFunction} from 'express';

let app:Application=express();

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send('hello');
});

app.listen(5000,()=>console.log('Server running'));
