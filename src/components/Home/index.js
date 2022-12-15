import {Component} from 'react'

import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeCaption,
  HomeUnRegisteredContent,
  HomeRegisterBtn,
  HomeRegisteredContent,
  HomeRegisteredName,
  HomeRegisteredCategory,
  HomeRegisterImg,
  RegisterLink,
} from './StyledComponents'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

class Home extends Component {
  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {registered, userDetails} = value

          return (
            <HomeContainer>
              <Header />
              <HomeContent>
                {registered === true ? (
                  <HomeRegisteredContent>
                    <HomeRegisteredName>
                      {`Hello ${userDetails.name}`}
                    </HomeRegisteredName>
                    <HomeRegisteredCategory>
                      {`Welcome to ${userDetails.topic}`}
                    </HomeRegisteredCategory>
                  </HomeRegisteredContent>
                ) : (
                  <HomeUnRegisteredContent>
                    <HomeTitle>Welcome to Meetup</HomeTitle>
                    <HomeCaption>Please register for the topic</HomeCaption>
                    <RegisterLink to="/register">
                      <HomeRegisterBtn type="button">Register</HomeRegisterBtn>
                    </RegisterLink>
                  </HomeUnRegisteredContent>
                )}
                <HomeRegisterImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContent>
            </HomeContainer>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
