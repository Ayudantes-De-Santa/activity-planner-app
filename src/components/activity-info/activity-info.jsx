import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../../actions/activity'
import '../../styles/activity-info.css';


let ActivityInfo = ({}) => (
					<li>
						<time datetime="2014-07-20">
							<span class="day">4</span>
							<span class="month">Jul</span>
							<span class="year">2014</span>
							<span class="time">ALL DAY</span>
						</time>
						<img alt="Hackaton" src="https://www.gstatic.com/webp/gallery3/2.png" />
						<div class="info">
							<h2 class="title">Hackaton 2018</h2>
							<p class="desc">Description....</p>
							<p class="place">Alberti 123, caba</p>
						</div>
				
					</li>
)

const mapStateToProps = (state) => ({
  
})
const mapDispatchToProps = (dispatch) => ({
//   saySomething: () => { dispatch(sayHello())}
})
ActivityInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityInfo)


export default ActivityInfo;