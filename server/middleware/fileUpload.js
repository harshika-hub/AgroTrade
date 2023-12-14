// import path from "path";
// import multer from "multer";
// import exp from "constants";

// var storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cb) => {
//         console.log("in storage");
//         let ext = path.extname(file.originalname)
//         cb(null, file.originalname)
//     }
// })

// var upload = multer({
//     storage: storage
// }).fields([
//     { name: 'org_image', maxCount: 1 }
// ]);

// export default upload;

// import path from "path";
// import multer from "multer";

// var storage = multer.diskStorage({
//     destination: "./uploads",
//     filename: (req, file, cb) => {
//         let ext = path.extname(file.originalname)
//         cb(null, file.originalname)
//     }
// })

// var upload = multer({
//     storage: storage
// }).fields([
//     { name: 'org_image', maxCount: 1 }
// ]);

// export {upload};

import multer from "multer";
import path from "path";

const generateUniqueFilename = (file) => {
    const fileExt = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    return uniqueSuffix + fileExt;
  };

var storage = multer.diskStorage({
    destination : "./uploads",
    filename : (req,file,cb)=>{
        console.log(file);
        cb(null, generateUniqueFilename(file));
        console.log("inside multer");
    }
})

export const upload = multer({
    storage : storage
});