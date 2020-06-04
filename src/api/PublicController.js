
import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCapthca = svgCaptcha.create({
      size:4,
      ignoreChars:'0o1il',
      color:true,
      noise:Math.floor(Math.random() * 5),
      width:150,
      height:50
    })
    console.log(newCapthca)
    ctx.body = {
      code:200,
      data: newCapthca.data,
    }
  }
}

export default new PublicController()
