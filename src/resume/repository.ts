import Resume from './model'

const findByEmail = async (email: string): Promise<any> => {
  return Resume.findOne({email: email}).exec()
}

export {
  findByEmail
}
