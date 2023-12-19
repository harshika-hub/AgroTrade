import multer from "multer";
import path from "path";

var storage=multer.diskStorage({
    destination:'../public/uploads'
    ,
    filename:(req,file,cb)=>{
        console.log("inside multer filenames",file)
        cb(null,Date.now()+path.extname(file.originalname));
    }
});
  export const upload=multer({storage:storage});