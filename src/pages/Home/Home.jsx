import React from "react";
import './Home.css'
import { FirstSection } from '../../components/FirstSection/FirstSection';
import { Side } from '../../components/Side/Side';
import { Basketball } from '../../components/Basketball/Basketball';
import { TheNike } from '../../components/TheNike/TheNike';
import { Main } from '../../components/Main/Main';
import { bestsellers, kobebryant, teamUSA } from '../../mocks/home';
import circle from '../../image/circle-white.png';
import Input from "../../components/Input/Input";
import searchicon from '../../image/Search.png'


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value) {
    this.setState({
      search: value,
    });
  }

  render() {
    const { handleInputChange } = this
    const { search } = this.state

    return (
      <>
        <div className="inputVal">
        <img src={searchicon} alt="" />
        <Input
          value={search}
          type="text"
          onChange={handleInputChange}
          placeholder="search by name products"
        ></Input>
        </div>
        <Main />
        <FirstSection
          bgColor="#000"
          color="#fff"
          bottomColor="#fff"
          firstDesc="Jerseys bestsellers"
          firstTitle="bestsellers"
          firstTitleColor="#FB0223"
          firstWord="Collection"
          secondDesc="The jerseys of the best nba players of the regular seasons."
          widthDesc="39%"
          products={bestsellers}
          view='View all'
          img={circle}
          search={search}
        />
        <FirstSection
          bgColor="#fff"
          color="#000"
          bottomColor="#000"
          firstDesc="Every team"
          firstTitle="one"
          secondTitle="store"
          firstTitleColor="#0949EF"
          firstWord="Every"
          secondWord="team"
          firstWordColor="#FB0223"
          secondDesc="Select your favorite team to view it’s jersys."
          widthDesc="27%"
          sectionTwo={<Side />}
          view='About Team'
          search={search}
        />
        <FirstSection
          bgColor="#000"
          color="#fff"
          bottomColor="#fff"
          firstDesc="Jerseys kobe bryant"
          firstTitle="kobe"
          secondTitle="bryant"
          firstTitleColor="#FCBF05"
          secondTitleColor="rgb(95, 2, 182)"
          firstWord="Authentic edition"
          secondDesc="Kobe bryant: a basketball legend. bryant crafted a storied career"
          secondDescTwo="In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one."
          widthDesc="100%"
          products={kobebryant}
          view='View all'
          search={search}
        />
        <FirstSection
          bgColor="#fff"
          color="#000"
          bottomColor="#000"
          firstDesc="Hall of fame"
          firstTitle="Basketball"
          firstTitleColor="#FB0223"
          firstWord="Hall of fame"
          secondDesc="The naismith memorial basketball hall of fame is home to more than"
          secondDescTwo="Four nundred iductees and more than 40 000 square feet of basketball history."
          widthDesc="100%"
          sectionTwo={<Basketball />}
          view='Official Site'
          search={search}
        />
        <FirstSection
          bgColor="#000"
          color="#fff"
          bottomColor="#fff"
          firstDesc="Jerseys 1992 team usa"
          firstTitle="1992"
          firstTitleColor="#0949EF"
          secondTitle="team usa"
          secondTitleColor="#FB0223"
          firstWord="Authentic edition"
          secondDesc="Jerseys of the united sates man’s olympics basketball team,"
          secondDescTwo="which represented the us of a in the 1992 summer olympics in barcelona."
          widthDesc="100%"
          products={teamUSA}
          view='View all'
          search={search}
        />
        <FirstSection
          bgColor="#fff"
          color="#000"
          bottomColor="#000"
          firstDesc="The application"
          firstTitle="The nike"
          firstTitleColor="#77D131"
          firstWord="App"
          secondDesc="Here you can find many interesting and useful from nike."
          secondDescTwo="Download the application from nike."
          widthDesc="100%"
          sectionTwo={<TheNike />}
          view='View all'
          search ={search}
        />
      </>
    )
  }
}