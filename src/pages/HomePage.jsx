import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "./../actions/hobby";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  //strict comparison
  //shallow comparison
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.list
  // }))
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    //distchatch
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="home-page">
      <button onClick={handleAddHobbyClick}> Random hobby</button>
      <HobbyList
        onHobbyClick={handleHobbyClick}
        hobbyList={hobbyList}
        activeId={activeId}
      ></HobbyList>
      Home Page redux
    </div>
  );
}

export default HomePage;
