import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onButtonClick = jest.fn();
  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        handleClick={onButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();
  expect(onButtonClick.mock.calls.length).toBe(1);
});
