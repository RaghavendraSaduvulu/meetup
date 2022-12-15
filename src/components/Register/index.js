import {Component} from 'react'

import {
  RegisterContainer,
  RegisterContent,
  RegisterImg,
  RegisterImgContainer,
  RegisterForm,
  RegisterFormHeading,
  RegisterFormLabel,
  RegisterFormSelectCategory,
  RegisterFormSelectOption,
  RegisterFormTextInput,
  RegisterFormRegisterBtn,
  RegisterFormErrMsg,
} from './StyledComponents'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {activeId: topicsList[0].id, name: '', errMsg: ''}

  onChangeTopic = event => {
    this.setState({activeId: event.target.value})
  }

  onSubmitForm = (event, changeRegisteredStatus, user) => {
    event.preventDefault()
    const {name} = this.state
    if (name === '') {
      this.setState({errMsg: 'Please enter your name'})
    } else {
      changeRegisteredStatus(user)
      this.setState({errMsg: ''})
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {activeId, name, errMsg} = this.state
    console.log(activeId)

    return (
      <MeetupContext.Consumer>
        {value => {
          const {changeRegisteredStatus} = value
          const topicDetails = topicsList.find(
            eachItem => eachItem.id === activeId,
          )
          const user = {
            name,
            topic: topicDetails.displayText,
          }
          const submitForm = event => {
            this.onSubmitForm(event, changeRegisteredStatus, user)
          }

          return (
            <RegisterContainer>
              <Header />
              <RegisterContent>
                <RegisterImgContainer>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </RegisterImgContainer>
                <RegisterForm onSubmit={submitForm}>
                  <RegisterFormHeading>Let us join</RegisterFormHeading>
                  <RegisterFormLabel htmlFor="username">NAME</RegisterFormLabel>
                  <RegisterFormTextInput
                    id="username"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={this.onChangeUsername}
                  />
                  <RegisterFormLabel htmlFor="topics">TOPICS</RegisterFormLabel>
                  <RegisterFormSelectCategory
                    value={activeId}
                    id="topics"
                    onChange={this.onChangeTopic}
                  >
                    {topicsList.map(eachItem => (
                      <RegisterFormSelectOption
                        key={eachItem.id}
                        value={eachItem.id}
                      >
                        {eachItem.displayText}
                      </RegisterFormSelectOption>
                    ))}
                  </RegisterFormSelectCategory>
                  <RegisterFormRegisterBtn type="submit">
                    Register Now
                  </RegisterFormRegisterBtn>
                  <RegisterFormErrMsg>{errMsg}</RegisterFormErrMsg>
                </RegisterForm>
              </RegisterContent>
            </RegisterContainer>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
