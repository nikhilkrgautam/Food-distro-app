import React from "react";
import { withFirebaseHOC } from '../firebase'
import { Link } from "react-router-dom"
import PieChart from 'react-minimal-pie-chart';
import HSBar from "react-horizontal-stacked-bar-chart";


class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodData: [],
      data: [5, 2, 7, 1, 1, 3, 4, 9]
    }
  }
  

  componentDidMount() {
    const db = this.props.firebase.db()
    db.collection('food-data').get()
      .then((snap) => {
        snap.docs.forEach((doc, i) => {
            console.log(doc.data())
          this.setState(state => ({
            foodData: [...state.foodData, {edibleTime: doc.data().edibleTime, foodType: doc.data().foodType, feedPeople: doc.data().feedPeople}]
          }))
        });
      })
      .catch(err => console.log(err))

      
  }



  render() {

    let data = []
    this.state.foodData.forEach((food, indx) => {
        data.push({
            title: food.foodType,
            value: food.feedPeople,
            color: "rgb(255, 255, 255)"
        })
    })
   
      return (
        <div>
          <PieChart
          style={{width: "400px"}}
            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            />;
            <HSBar
            height={50}
            showTextIn
            showTextUp
            showTextDown
            id="new_id"
            fontColor="rgb(50,20,100)"
            data={data}
            />
        </div>
      )


  }
}

export default withFirebaseHOC(Analysis)
