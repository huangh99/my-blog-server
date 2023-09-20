class FileController {
  async upload(ctx){
    try {
      const file = ctx.request.files.file
      const filePath = `${ctx.origin}/${file.newPath}`
      ctx.body = {
        code: 200,
        message: '上传成功',
        result: {
          fileName: file.originalFilename,
          filePath,
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

}

module.exports = new FileController()