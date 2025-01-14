import React from 'react';
import './App.css';

import IterationContainer from './components/iterationcontainer/IterationContainer';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';
import FaceBook from './components/facebook/FaceBook';
import SignupPage from './components/signuppage/SignupPage';
import RGBColorPicker from './components/rgbcolorpicker/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <IterationContainer title={'Iteration 1 | Component: IdCard'}>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </IterationContainer>

      <IterationContainer title={'Iteration 2 | Component: Greetings'}>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </IterationContainer>

      <IterationContainer title="Iteration 3 | Component: Random">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </IterationContainer>

      <IterationContainer title="Iteration 4 | Component: BoxColor">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </IterationContainer>

      <IterationContainer title="Iteration 5 | Component: CreditCard">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </IterationContainer>

      <IterationContainer title="Iteration 6 | Component: Rating">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </IterationContainer>

      <IterationContainer title="Iteration 7 | Component: DriverCard">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </IterationContainer>

      <IterationContainer title="Iteration 8 | State: LikeButton">
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>
      </IterationContainer>

      <IterationContainer title="Iteration 9: State: ClickablePicture">
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </IterationContainer>

      <IterationContainer title="Iteration 10 | State: Dice">
        <Dice />
      </IterationContainer>

      <IterationContainer title="Iteration 11 | State: Carousel">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </IterationContainer>

      <IterationContainer title="Iteration 12 | List and Keys | NumbersTable">
        <NumbersTable limit={12} />
      </IterationContainer>

      <IterationContainer title="Iteration 13 and 14 | List and Keys - FaceBook">
        <FaceBook />
      </IterationContainer>

      <IterationContainer title="Iteration 15 | Form - SignupPage">
        <SignupPage />
      </IterationContainer>

      <IterationContainer title="Iteration 16 | Lifting State Up - RGBColorPicker">
        <RGBColorPicker />
      </IterationContainer>
    </div>
  );
}

export default App;
