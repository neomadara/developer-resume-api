import * as mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: String,
  appointment: String,
  email: String,
  phone: String,
  linkedInUrl: String,
  githubUrl: String,
  scrumUrl: String,
  presentation: String,
  technologies: [{
    type: {
      subtitle: String,
      techs: [{type: String}]
    }
  }],
  jobs: [{
    type: {
      appointment: String,
      company: String,
      date: String,
      description: String,
      stacks: [{type: {name :String}}]
    }
  }],
  educations: [{
    type: {
      career: String,
      university: String,
      date: String
    }
  }],
  interests: [{type: String}],
});

export default mongoose.model('Resume', resumeSchema)
