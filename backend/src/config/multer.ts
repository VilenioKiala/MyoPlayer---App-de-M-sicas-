import path from 'path'

export const multerConfig = {
    destination: path.resolve(__dirname,"..","uploads"),
    filename: function (){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1E9)

        return uniqueSuffix;
    },
    fileSizeLimit: 1000000 * 20
}